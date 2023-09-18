import actionTypes from "./actionTypes";

import { apiGetTextLimit,apiGetImageSearch, apiGetOcrSearch,apiGetSegmentSearch, apiGetObjectDetection } from "../../services/image";

  const getTextLimit = (query) => async (dispatch) => {
    try {
      let response = await apiGetTextLimit(query);
      if (response?.status === 200) {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: response.data,
          msg: response.statusText,
        });
      } else {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: [],
          msg: response.data.msg,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_IMAGE_LIMIT,
        data: [],
      });
    }
  }
  const getObjectDetection = (query,data) => async (dispatch) => {
    try {
      let response = await apiGetObjectDetection(query,data);
      if (response?.status === 200) {
        dispatch({
          type: actionTypes.OBJECT_DETECTION,
          data: response.data,
          msg: response.statusText,
        });
      } else {
        dispatch({
          type: actionTypes.OBJECT_DETECTION,
          data: [],
          msg: response.data.msg,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.OBJECT_DETECTION,
        data: [],
      });
    }
  }
  const getImageLimit = (query) => async (dispatch) => {
    try {
      let response = await apiGetImageSearch(query);
      console.log(response)
      if (response?.status === 200) {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: response.data,
            msg: response.statusText,
        });
      } else {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: [],
          msg: response.data.msg,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_IMAGE_LIMIT,
        data: [],
      });
    }
  }
  const getSegmentLimit = (query) => async (dispatch) => {
    try {
      let response = await apiGetSegmentSearch(query);
      console.log(response)
      if (response?.status === 200) {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: response.data,
            msg: response.statusText,
        });
      } else {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: [],
          msg: response.data.msg,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_IMAGE_LIMIT,
        data: [],
      });
    }
  }
  const getOcrSearch = (query,data) => async (dispatch) => {
    try {   
      let response = await apiGetOcrSearch(query,data);
      
      if (response?.status === 200) {
        dispatch({
          type: actionTypes.GET_OCR_LIMIT,
          data: response.data,
          msg: response.statusText,
        });
      } else {
        dispatch({
          type: actionTypes.GET_OCR_LIMIT,
          data: [],
          msg: response.data.msg,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_OCR_LIMIT,
        data: [],
      });
    }
  }
  export{
    getTextLimit,
    getImageLimit,
    getOcrSearch,
    getSegmentLimit,
    getObjectDetection
  }