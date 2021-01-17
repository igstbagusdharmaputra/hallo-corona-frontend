import { GET_USER } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getProfile = (id) => {
  return {
    type: GET_USER,
    async payload() {
      try {
        const user = await API.get(`/profile/${id}`, setAuthToken(localStorage.getItem("token")));
        return user.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};