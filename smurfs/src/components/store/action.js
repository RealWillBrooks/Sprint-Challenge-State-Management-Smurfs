import axios from 'axios'


export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getSmurfs = () => dispatch =>{
    dispatch({ type: FETCH_START })
    axios  
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_START, payload: res.data})
            console.log('GET REQ', res.data)
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: 'ERROR'})
            console.log(err)
        })
}


export const ADD_START = 'ADD_START'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAIL = 'ADD_FAIL'

export const addSmurf = state => dispatch =>{
    dispatch({ type: ADD_START })
    axios  
        .post('http://localhost:3333/smurfs', state)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data})
            console.log('POST REQ', res.data)
        })
        .catch(err => {
            dispatch({ type: ADD_FAIL, payload: 'ERROR'})
            console.log(err)
        })
}

export const REMOVE_SMURF = "REMOVE_SMURF";
export const REMOVE_SMURF_SUCCESS = "REMOVE_SMURF_SUCCESS";
export const REMOVE_SMURF_FAILURE = "REMOVE_SMURF_FAILURE";

export const removeSmurf = id => dispatch => {
    dispatch({ type: REMOVE_SMURF })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: REMOVE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REMOVE_SMURF_FAILURE, payload: err.message})
    })
  } 

