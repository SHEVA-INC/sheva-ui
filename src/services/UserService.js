import { axiosInstance } from "../api/AxiosInterceptor";

class UserService {
  async fetchUser() {
    return (await axiosInstance.get("user/profile")).data;
  }

  async updateUserData(data) {
    return (await axiosInstance.put("user/profile/update", data)).data;
  }

  async updateUserPicture(data) {
    return (
      await axiosInstance.put("user/profile/update-picture", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  }

  async changePassword(data) {
    return (await axiosInstance.put("user/change_password", data)).data;
  }
}

const userService = new UserService();
export default userService;
