import { createStore, combineReducers, applyMiddleware } from "redux";
import article from "../_reducers/article";
import user from "../_reducers/user";
import consultation from "../_reducers/consultation";
import consultationId from "../_reducers/consultationId";

import { logger, promise } from "./middleware";

const middleware = [logger, promise];

// GLOBAL STATES
const rootReducer = combineReducers({
  article,
  user,
  consultation,
  consultationId
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;