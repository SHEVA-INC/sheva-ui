import AuthManager from "./TokenService";
import { jwtDecode } from "jwt-decode";
import authService from "../services/AuthService";
import { createContext, useContext, useState } from "react";

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
    setUserId(tokenPayload.userEmail);

    return tokenPayload;
  };

  const auth = {
    userId,
    userRole,

    authorized() {
      return userRole !== null;
    },

    async signUp(registerCommand) {
      let response = await authService.signUp(registerCommand);
      // console.log(response);
      // setState(response.access);
      AuthManager.updateLocalAccessToken(response.access);
      const { userRole } = setState(response.access);

      return userRole;
    },

    async signIn(loginCommand) {
      let response = await authService.signIn(loginCommand);
      console.log(response);

      AuthManager.updateLocalAccessToken(response.access);
      const { userRole } = setState(response.access);

      return userRole;
    },

    updateAccessToken(userToken) {
      AuthManager.updateLocalAccessToken(userToken);
      setState(userToken);
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
