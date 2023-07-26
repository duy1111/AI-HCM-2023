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
   
    default:
      return state;
  }
};
export default imageReducers;

