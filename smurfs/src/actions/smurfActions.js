import axios from 'axios'

//exporting get
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

//exporting post
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";
export const POST_SMURFS_START = "POST_SMURFS_START";



// building out actions



export const  getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log('API data', res.data)
            dispatch ({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAIL, payload: err.res })
        })
}

export const postSmurf = newSmurf => dispatch => {
    // dispatch({ type: POST_SMURFS_START });
    axios
        .post ("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POST_SMURF_FAIL, payload: err.response })
        })
}
