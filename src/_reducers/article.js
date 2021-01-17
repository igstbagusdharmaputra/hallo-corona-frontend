import { GET_ARTICLES, GET_ARTICLE, POST_ARTICLE } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ARTICLES}_PENDING`:
    case `${GET_ARTICLE}_PENDING`:
    case `${POST_ARTICLE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ARTICLES}_FULFILLED`:
    case `${GET_ARTICLE}_FULFILLED`:
    case `${POST_ARTICLE}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case `${GET_ARTICLES}_REJECTED`:
    case `${GET_ARTICLE}_REJECTED`:
    case `${POST_ARTICLE}_REJECTED`:
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
