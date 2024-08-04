import { axiosInstance } from "../api/AxiosInterceptor";

class ShoppingCartService {
  async addShoesToShoppingCart(data) {
    return (
      await axiosInstance.post(
        `cart/add-to-cart/${data.product_id}/${data.quantity}/${data.size}/`,
        data,
      )
    ).data;
  }

  async getShoppingCart(pageNum) {
    return (await axiosInstance.get(`cart/view_cart?page=${pageNum}`)).data;
  }

  async deleteProductFromShoppingCart(productId) {
    return (
      await axiosInstance.delete(`cart/cart/remove-from-cart/${productId}/`)
    ).data;
  }
}

const shoppingCartService = new ShoppingCartService();
export default shoppingCartService;
