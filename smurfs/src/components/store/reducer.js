import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAIL,
    REMOVE_SMURF,
    REMOVE_SMURF_SUCCESS,
    REMOVE_SMURF_FAILURE
  } from "./action";
  
  const initialState = {
    smurfs: [],
    err: "",
    isFetching: false,
    deletingSmurf: false,

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
          return {
            ...state,
            deletingSmurf: true,
            error: null
          }
          case REMOVE_SMURF_SUCCESS:
          return {
            ...state,
            smurfs: action.payload,
            deletingSmurf: false
          }
          case REMOVE_SMURF_FAILURE:
          return {
            ...state,
            deletingSmurf: false,
            error: action.payload
          }
          default:
            return state;
        }
      };
   