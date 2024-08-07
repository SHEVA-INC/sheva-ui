import { axiosInstance } from "../api/AxiosInterceptor";

class AuthService {
  async signIn(data) {
    return (await axiosInstance.post("user/login", data)).data;
  }

  async signUp(data) {
    return (await axiosInstance.post("user/register", data)).data;
  }

  async refreshToken(data) {
    return (await axiosInstance.post("user/token/refresh", data)).data;
  }
}

const authService = new AuthService();
export default authService;
