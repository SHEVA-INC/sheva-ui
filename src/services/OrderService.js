import { axiosInstance } from "../api/AxiosInterceptor";

class OrderService {
  async createOrder(data) {
    return (await axiosInstance.get("orders/create", data)).data;
  }

  async deleteProductFromOrder(productId) {
    return (
      await axiosInstance.delete(`cart/cart/remove-from-cart/${productId}/`)
    ).data;
  }
}

const orderService = new OrderService();
export default orderService;
