import axios from "axios";
import {
  TEST_LIST_REQUEST,
  TEST_LIST_SUCCESS,
  TEST_LIST_FAIL,
  TEST_DETAILS_REQUEST,
  TEST_DETAILS_SUCCESS,
  TEST_DETAILS_FAIL,
  COUNT_REQUEST,
  COUNT_SUCCESS,
  COUNT_FAIL,
} from "../constants/testConstants";

export const listTests =
  (keyword = "") =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: TEST_LIST_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/tests${keyword}`, config);
      dispatch({
        type: TEST_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TEST_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listTestDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TEST_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/tests/${id}`, config);
    dispatch({
      type: TEST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const countAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: COUNT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/count/", config);
    dispatch({
      type: COUNT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COUNT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
