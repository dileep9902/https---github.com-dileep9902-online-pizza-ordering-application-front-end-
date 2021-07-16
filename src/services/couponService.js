import axios from "axios";

const BASE_URL = "http://localhost:8081/pizza/v1";

class CouponService {
  async getAllCoupons() {
    return await axios.get(`${BASE_URL}/coupon/all`);
  }

  async getCouponById(couponId) {
    return await axios.get(`${BASE_URL}/coupon/+${couponId}`);
  }

  async addCoupon(coupon) {
    return await axios.post(`${BASE_URL}/coupon`, coupon);
  }
  async updateCoupon(coupon) {
    return await axios.put(`${BASE_URL}/coupon`, coupon);
  }
  async deleteCoupon(couponId) {
    return await axios.delete(`${BASE_URL}/coupon/${couponId}`);
  }
}

export default new CouponService();