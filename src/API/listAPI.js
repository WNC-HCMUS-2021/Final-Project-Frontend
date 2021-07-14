import { axiosInstance } from "../API/axiosConfig";

const api = {
  login: (data) => {
    return axiosInstance.post("/auth", data);
  },
  register: (data) => {
    return axiosInstance.post("/user/register", data);
  },
  myProfile: () => {
    return axiosInstance.get("/user/profile");
  },
  changePassword: (data) => {
    return axiosInstance.put("/user/change-password", data);
  },
  updateProfile: (data) => {
    return axiosInstance.put("/user/update-profile", data);
  },
  confirmEmail: (userId, code) => {
    return axiosInstance.post(`/auth/verify/${userId}/${code}`);
  },
  resendConfirmEmail: () => {
    return axiosInstance.get("user/resend-confirm-email");
  },
};

export default api;
