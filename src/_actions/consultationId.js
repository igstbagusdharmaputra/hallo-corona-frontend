import { GET_CONSULTATION_ID } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getConsultationId = id => {
  return {
    type: GET_CONSULTATION_ID,
    async payload() {
      try {
        const consul = await API.get(
          `/consultation/${id}`,
          setAuthToken(localStorage.getItem("token"))
        );
        return consul.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};
