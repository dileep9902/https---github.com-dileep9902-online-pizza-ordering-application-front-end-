import axios from "axios";

const BASIC_URL = "http://localhost:8081/pizza/v1";

class CustomerService {
  async getCustomers() {
    return await axios.get(`${BASIC_URL}/customer/all`);
  }

  async getCustomerById(customerId) {
    return await axios.get(`${BASIC_URL}/customer/+${customerId}`);
  }

  async addCustomer(customer) {
    return await axios.post(`${BASIC_URL}/customer`, customer);
  }
  async updateCustomer(customer) {
    return await axios.put(`${BASIC_URL}/customer`, customer);
  }
  async deleteCustomer(customerId) {
    return await axios.delete(`${BASIC_URL}/customer/${customerId}`);
  }
}

export default new CustomerService();