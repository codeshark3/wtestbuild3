import axios from "axios";
import {
  PREDICTION_REQUEST,
  PREDICTION_SUCCESS,
  PREDICTION_FAIL,
} from "../constants/predictionConstants";

export const predictionAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PREDICTION_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/predictions/", config);
    dispatch({
      type: PREDICTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PREDICTION_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
