FROM node:20-alpine@sha256:df01469346db2bf1cfc1f7261aeab86b2960efa840fe2bd46d83ff339f463665 AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS dependencies
COPY package.json *lock.* ./
RUN \
    if [ -f package-lock.json ]; then npm ci; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    elif [ -f bun.lockb ]; then bun install --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

FROM base AS build
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN \
    if [ -f package-lock.json ]; then npm run build; \
    elif [ -f yarn.lock ]; then yarn build; \
    elif [ -f pnpm-lock.yaml ]; then pnpm run build; \
    elif [ -f bun.lockb ]; then bun run build; \
    else echo "No package manager detected." && exit 1; \
    fi

FROM nginx:stable-alpine@sha256:208ae3c180b7d26f6a8046fac4c8468b2ab8bd92123ab73f9c5ad0f6f1c5543d
RUN apk add --no-cache nodejs
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/templates

COPY nginx/default.conf.template /etc/nginx/templates
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /etc/nginx/templates

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]