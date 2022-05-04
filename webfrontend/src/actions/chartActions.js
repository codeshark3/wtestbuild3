import axios from "axios";
import {
  CHARTS_REQUEST,
  CHARTS_SUCCESS,
  CHARTS_FAIL,
} from "../constants/chartConstants";

export const chartsAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CHARTS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/charts/", config);
    dispatch({
      type: CHARTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHARTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
