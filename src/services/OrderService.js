import { axiosInstance } from "../api/AxiosInterceptor";

class OrderService {
  async createOrder(data) {
    return (await axiosInstance.post("orders/create", data)).data;
  }
}

const orderService = new OrderService();
export default orderService;
