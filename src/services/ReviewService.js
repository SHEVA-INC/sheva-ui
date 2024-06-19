import { axiosInstance } from "../api/AxiosInterceptor";

class ReviewService {
  async fetchReviews() {
    return (await axiosInstance.get("reviews/list")).data;
  }

  async addReview(data) {
    return (await axiosInstance.post("reviews/reviews/create", data)).data;
  }

  async deleteReview(reviewId) {
    return (await axiosInstance.delete(`reviews/reviews/delete/${reviewId}`))
      .data;
  }
}

const reviewService = new ReviewService();
export default reviewService;
