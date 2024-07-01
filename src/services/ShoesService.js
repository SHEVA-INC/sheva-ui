import { axiosInstance } from "../api/AxiosInterceptor";

class ShoesService {
  async fetchShoesList(pageNum) {
    return (await axiosInstance.get(`boots/list?page=${pageNum}`)).data;
  }

  async fetchShoesDetails(shoesId) {
    return (await axiosInstance.get(`boots/list${shoesId}`)).data;
  }

  async updateShoesDetails(shoesId, data) {
    return (await axiosInstance.put(`boots/boots/${shoesId}/update/`, data))
      .data;
  }

  async updateMainImage(shoesId, data) {
    return (
      await axiosInstance.put(
        `boots/boots/${shoesId}/update-main-image/`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
    ).data;
  }

  async updateImages(shoesId, data) {
    return (
      await axiosInstance.put(`boots/boots/${shoesId}/update-images`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  }

  async fetchLikedShoes(data) {
    return (await axiosInstance.post("boots/liked/", data)).data;
  }

  async fetchNewShoes() {
    return (await axiosInstance.get("boots/new")).data;
  }

  async fetchPopularShoes() {
    return (await axiosInstance.get("boots/popular")).data;
  }
}

const shoesService = new ShoesService();
export default shoesService;
