FROM nginx:stable-alpine@sha256:208ae3c180b7d26f6a8046fac4c8468b2ab8bd92123ab73f9c5ad0f6f1c5543d

WORKDIR /usr/share/nginx/html 

RUN apk add --no-cache nodejs && \
    rm -rf ./*

COPY dist/ .

RUN mkdir -p /etc/nginx/templates && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /etc/nginx/templates /var/run/nginx.pid

COPY nginx/default.conf.template /etc/nginx/templates

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]