import { axiosInstance } from "../api/AxiosInterceptor";

class ShoesService {
  async fetchShoesList(data) {
    return (await axiosInstance.get("boots/list", data)).data;
  }

  async fetchShoesDetails(shoesId) {
    return (await axiosInstance.get(`boots/list${shoesId}`)).data;
  }
}

const shoesService = new ShoesService();
export default shoesService;
