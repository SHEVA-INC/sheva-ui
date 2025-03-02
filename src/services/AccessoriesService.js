import { axiosInstance } from "../api/AxiosInterceptor";

class AccessoriesService {
  async fetchAccessoriesList(pageNum, type) {
    let url = `accessories/accessories/?&page=${pageNum}`;

    if (type) {
      url += `&type=${type}`;
    }

    return (await axiosInstance.get(url)).data;
  }

  async fetchAccessoriesDetails(accessoriesId) {
    return (
      await axiosInstance.get(`accessories/accessories/${accessoriesId}/`)
    ).data;
  }

  async createAccessories(data) {
    return (
      await axiosInstance.post("accessories/accessories/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  }

  async updateAccessoriesDetails(accessoriesId, data) {
    return (
      await axiosInstance.patch(
        `accessories/accessories/${accessoriesId}/`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
    ).data;
  }

  async deleteAccessories(accessoriesId) {
    return (
      await axiosInstance.delete(`accessories/accessories/${accessoriesId}/`)
    ).data;
  }

  async fetchLikedAccessories(pageNum, data) {
    return (
      await axiosInstance.post(
        `accessories/liked-accessories/?page=${pageNum}`,
        data,
      )
    ).data;
  }
}

const accessoriesService = new AccessoriesService();
export default accessoriesService;
