import { jwtDecode } from "jwt-decode";
import authService from "../services/AuthService";

export default class AuthManager {
  static refreshTokenPromise;

  static async getAccessToken() {
    let accessToken = AuthManager.getLocalAccessToken();
    let refreshToken = AuthManager.getLocalRefreshToken();

    if (!accessToken && !refreshToken) return null;

    if (accessToken && accessTokenExpirationIsInFuture(accessToken)) {
      return accessToken;
    }

    if (AuthManager.refreshTokenPromise) {
      accessToken = await AuthManager.refreshTokenPromise;
    } else {
      AuthManager.refreshTokenPromise = authService
        .refreshToken({ refresh: refreshToken })
        .then((response) => {
          const newAccessToken = response.access;
          AuthManager.updateLocalAccessToken(newAccessToken);
          AuthManager.refreshTokenPromise = null;
          return newAccessToken;
        })
        .catch((error) => {
          AuthManager.handleInvalidRefreshToken();
          throw error;
        });

      accessToken = await AuthManager.refreshTokenPromise;
    }

    return accessToken ?? "";
  }

  static getLocalAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static getLocalRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  static updateLocalAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  static updateLocalRefreshToken(refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  static removeLocalAccessToken() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  static handleInvalidRefreshToken() {
    AuthManager.removeLocalAccessToken();
  }
}

const accessTokenExpirationIsInFuture = (token) => {
  const secondsSinceEpoch = Date.now() / 1000;
  const tokenExpirationInSecondsSinceEpoch = jwtDecode(token).exp;
  return secondsSinceEpoch < tokenExpirationInSecondsSinceEpoch;
};
