import axios from "axios";

const API_URL = "http://localhost:8080/api/employee/";

class EmployeeService {
  getEmployees() {
    return axios.get(API_URL + "all");
  }

  getEmployee(id: number) {
    return axios.get(API_URL + "get/" + id);
  }

  createEmployee(employee: any) {
    return axios.post(API_URL + "create", employee);
  }

  updateEmployee(employee: any) {
    return axios.put(API_URL + "update", employee);
  }

  deleteEmployee(id: number) {
    return axios.delete(API_URL + "delete/" + id);
  }
}

export default new EmployeeService();
