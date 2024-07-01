import { axiosInstance } from "../api/AxiosInterceptor";

class ReviewService {
  async fetchReviews(pageNum) {
    return (await axiosInstance.get(`reviews/list?page=${pageNum}`)).data;
  }

  async addReview(data) {
    return (await axiosInstance.post("reviews/create", data)).data;
  }

  async deleteReview(reviewId) {
    return (await axiosInstance.delete(`reviews/delete/${reviewId}`)).data;
  }
}

const reviewService = new ReviewService();
export default reviewService;
