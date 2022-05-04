import {
  PREDICTION_REQUEST,
  PREDICTION_SUCCESS,
  PREDICTION_FAIL,
} from "../constants/predictionConstants";

export const predictionReducer = (state = { forecast: [] }, action) => {
  switch (action.type) {
    case PREDICTION_REQUEST:
      return { loading: true, forecast: [] };

    case PREDICTION_SUCCESS:
      return { loading: false, forecast: action.payload };

    case PREDICTION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
