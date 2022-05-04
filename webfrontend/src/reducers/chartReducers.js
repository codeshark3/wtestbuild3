import {
  CHARTS_REQUEST,
  CHARTS_SUCCESS,
  CHARTS_FAIL,
} from "../constants/chartConstants";

export const chartsReducer = (state = { charts: [] }, action) => {
  switch (action.type) {
    case CHARTS_REQUEST:
      return { loading: true, charts: [] };

    case CHARTS_SUCCESS:
      return { loading: false, charts: action.payload };

    case CHARTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
