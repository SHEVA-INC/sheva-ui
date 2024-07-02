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

  async getShoppingCart() {
    return (await axiosInstance.get("cart/view_cart")).data;
  }
}

const shoppingCartService = new ShoppingCartService();
export default shoppingCartService;
