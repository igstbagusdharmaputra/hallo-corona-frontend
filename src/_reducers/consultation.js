import { POST_CONSULTATION, GET_CONSULTATION } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_CONSULTATION}_PENDING`:
    case `${GET_CONSULTATION}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${POST_CONSULTATION}_FULFILLED`:
    case `${GET_CONSULTATION}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        success: true
      };
    case `${POST_CONSULTATION}_REJECTED`:
    case `${GET_CONSULTATION}_REJECTED`:
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
