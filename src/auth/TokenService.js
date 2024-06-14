import { jwtDecode } from "jwt-decode";

export default class AuthManager {
  static refreshTokenPromise;

  static async getAccessToken() {
    let accessToken = AuthManager.getLocalAccessToken();

    if (!accessToken) return null;

    if (accessTokenExpirationIsInFuture(accessToken)) {
      return accessToken;
    }

    return accessToken ?? "";
  }
  static getLocalAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static updateLocalAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  static removeLocalAccessToken() {
    localStorage.removeItem("accessToken");
  }
}

const accessTokenExpirationIsInFuture = (token) => {
  const secondsSinceEpoch = Date.now() / 1000;
  const tokenExpirationInSecondsSinceEpoch = jwtDecode(token).exp;

  return secondsSinceEpoch < tokenExpirationInSecondsSinceEpoch;
};
