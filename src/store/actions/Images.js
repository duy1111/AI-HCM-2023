import actionTypes from "./actionTypes";

import { apiGetImageLimit } from "../../services/image";

  const getImageLimit = (query) => async (dispatch) => {
    try {
      let response = await apiGetImageLimit(query);
      console.log(response)
      if (response?.status === 200) {
        dispatch({
          type: actionTypes.GET_IMAGE_LIMIT,
          data: response.data,
        //   count:response.data.data?.count,
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
  export{
    getImageLimit
  }