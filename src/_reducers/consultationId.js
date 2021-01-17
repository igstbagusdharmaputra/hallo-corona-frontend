import { GET_CONSULTATION_ID } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CONSULTATION_ID}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_CONSULTATION_ID}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        success: true
      };
    case `${GET_CONSULTATION_ID}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
