import actionTypes from "../actions/actionTypes";

const initState = {

  images:[],
  count:'',

};

const imageReducers = (state = initState, action) => {
  switch (action.type) {
    
    case actionTypes.GET_IMAGE_LIMIT:
      return {
        ...state,
        images: action.data || [],
        count: action.count || 0

      }

    case actionTypes.GET_OCR_LIMIT:
      return{
        ...state,
        images: action.data || [],
        count: action.count || 0
      }
    case actionTypes.IMAGE_SEARCH:
      return{
        ...state,
        images: action.data || [],
        count: action.count || 0
      }
    case actionTypes.SEGMENT_SEARCH:
      return{
        ...state,
        images: action.data || [],
        count: action.count || 0
      }
    case actionTypes.OBJECT_DETECTION:
      return{
        ...state,
        images: action.data || [],
        count: action.count || 0
      }
    default:
      return state;
  }
};

export default imageReducers;

