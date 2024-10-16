import { axiosInstance } from "../api/AxiosInterceptor";

class ShoesService {
  async fetchShoesList(pageNum, color, size, type, brand) {
    let url = `boots/list?&page=${pageNum}`;

    if (color) {
      url += `&color=${color}`;
    }

    if (size) {
      url += `&size=${size}`;
    }

    if (type) {
      url += `&type=${type}`;
    }

    if (brand) {
      url += `&brand=${brand}`;
    }

    return (await axiosInstance.get(url)).data;
  }

  async fetchShoesDetails(shoesId) {
    return (await axiosInstance.get(`boots/list${shoesId}`)).data;
  }

  async createShoes(data) {
    return (
      await axiosInstance.post("boots/list", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
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
      await axiosInstance.put(`boots/boots/${shoesId}/update-images/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  }

  async deleteShoes(shoesId) {
    return (await axiosInstance.delete(`boots/list${shoesId}/`)).data;
  }

  async fetchLikedShoes(pageNum, data) {
    return (await axiosInstance.post(`boots/liked/?page=${pageNum}`, data))
      .data;
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
