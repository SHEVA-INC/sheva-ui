import { createContext, useContext, useState } from "react";
import AuthManager from "./TokenService";
import { jwtDecode } from "jwt-decode";
import authService from "../services/AuthService";

const authContext = createContext({
  userId: null,
  userRole: null,
  userEmail: null,
  authorized: () => {},
  signIn: async () => {},
  updateAccessToken: () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const getJwtPayload = (token) => {
    if (!token || typeof token !== "string") {
      return {
        userId: null,
        userRole: null,
      };
    }

    const decodedJwt = jwtDecode(token);
    return {
      userId: decodedJwt?.user_id,
      userRole: decodedJwt?.role,
      userExp: decodedJwt?.exp,
    };
  };

  const localAccessToken = AuthManager.getLocalAccessToken();
  const payload = getJwtPayload(localAccessToken);
  const [userId, setUserId] = useState(payload.userId);
  const [userRole, setUserRole] = useState(payload.userRole);

  const setState = (accessToken) => {
    const tokenPayload = getJwtPayload(accessToken);
    setUserRole(tokenPayload.userRole);
    setUserId(tokenPayload.userId);
    return tokenPayload;
  };

  const auth = {
    userId,
    userRole,

    authorized() {
      return userRole !== null;
    },

    async signUp(registerCommand) {
      const response = await authService.signUp(registerCommand);
      AuthManager.updateLocalAccessToken(response.access);
      AuthManager.updateLocalRefreshToken(response.refresh);
      const { userRole } = setState(response.access);

      return userRole;
    },

    async signIn(loginCommand) {
      const response = await authService.signIn(loginCommand);
      AuthManager.updateLocalAccessToken(response.access);
      AuthManager.updateLocalRefreshToken(response.refresh);
      const { userRole } = setState(response.access);

      return userRole;
    },

    updateAccessToken(userToken) {
      AuthManager.updateLocalAccessToken(userToken);
      setState(userToken);
    },

    async refresh() {
      try {
        const response = await authService.refreshToken({
          refresh: AuthManager.getLocalRefreshToken(),
        });
        AuthManager.updateLocalAccessToken(response.access);
        setState(response.access);
      } catch (error) {
        if (error?.response?.data?.code === "token_not_valid") {
          auth.signOut();
        }
      }
    },

    async signOut() {
      AuthManager.removeLocalAccessToken();
      setState(null);
    },
  };

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function useAuth() {
  return useContext(authContext);
}
