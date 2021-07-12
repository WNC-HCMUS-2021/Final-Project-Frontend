import { axiosInstance, parseJwt } from "../API/axiosConfig";

const api = {
  login: (data) => {
    return axiosInstance.post("/auth", data);
  },
  myProfile: () => {
    return axiosInstance.get("/user/profile");
  },
  changePassword: (data) => {
    return axiosInstance.put("/user/change-password", data);
  },
};

export default api;
