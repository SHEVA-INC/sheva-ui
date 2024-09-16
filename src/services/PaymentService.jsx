import { axiosInstance } from "../api/AxiosInterceptor";

class PaymentService {
  async createPayment(orderId) {
    return (
      await axiosInstance.post(
        `payment/create/${orderId}`,
        {},
        {
          headers: {
            "X-Token": "m1fY72aALd5knlhnqKFtTxg",
            "Content-Type": "application/json",
          },
        },
      )
    ).data;
  }
}

const paymentService = new PaymentService();
export default paymentService;
