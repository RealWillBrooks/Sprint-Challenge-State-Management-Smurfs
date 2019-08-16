import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAIL,
    REMOVE_SMURF
  } from "./action";
  
  const initialState = {
    smurfs: [],
    err: "",
    isFetching: false
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return {
          ...state,
          err: "",
          isFetching: true,
          smurfs: []
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          err: "",
          isFetching: false,
          smurfs: action.payload
        };
      case FETCH_FAIL:
        return {
          ...state,
          err: action.payload,
          isFetching: false,
          smurfs: []
        };
      case ADD_START:
        return {
          ...state,
          err: "",
          isFetching: true,
          smurfs: []
        };
      case ADD_SUCCESS:
        return {
          ...state,
          err: "",
          isFetching: false,
          smurfs: action.payload
        };
      case ADD_FAIL:
        return {
          ...state,
          err: action.payload,
          isFetching: false,
          smurfs: []
        };
      case REMOVE_SMURF:
          return{
          ...state.filter((data, i) => i !== action.id)
          }
  
      default:
        return state;
    }
  };