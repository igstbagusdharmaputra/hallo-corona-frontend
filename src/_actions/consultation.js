import { POST_CONSULTATION, GET_CONSULTATION } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const postConsultation = data => {
  return {
    type: POST_CONSULTATION,
    async payload() {
      try {
        const consul = await API.post(
          `/consultation`,
          data,
          setAuthToken(localStorage.getItem("token"))
        );
        return consul.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const getConsultation = () => {
  return {
    type: GET_CONSULTATION,
    async payload() {
      try {
        const consul = await API.get(
          `/consultation`,
          setAuthToken(localStorage.getItem("token"))
        );
        return consul.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};
