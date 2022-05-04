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

export const testListReducer = (state = { tests: [] }, action) => {
  switch (action.type) {
    case TEST_LIST_REQUEST:
      return { loading: true, tests: [] };

    case TEST_LIST_SUCCESS:
      return {
        loading: false,
        tests: action.payload.tests,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case TEST_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const testDetailsReducer = (state = { test: {} }, action) => {
  switch (action.type) {
    case TEST_DETAILS_REQUEST:
      return { loading: true, ...state };

    case TEST_DETAILS_SUCCESS:
      return { loading: false, test: action.payload };

    case TEST_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const countReducer = (state = { count: [] }, action) => {
  switch (action.type) {
    case COUNT_REQUEST:
      return { loading: true, count: [] };

    case COUNT_SUCCESS:
      return { loading: false, count: action.payload };

    case COUNT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
