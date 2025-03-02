import { axiosInstance } from "../api/AxiosInterceptor";

class ShoppingCartService {
  async addShoesToShoppingCart(data) {
    return (await axiosInstance.post(`cart/add/`, data)).data;
  }

  async getShoppingCart() {
    return (await axiosInstance.get(`cart/`)).data;
  }

  async deleteProductFromShoppingCart(productId) {
    return (await axiosInstance.delete(`cart/remove/${productId}/`)).data;
  }
}

const shoppingCartService = new ShoppingCartService();
export default shoppingCartService;
