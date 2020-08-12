import axios from 'axios';

export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchFriend = () => (dispatch) => {
    dispatch({ type: FETCH_FRIEND})
    axios
        .get('http://localhost:5000/api/friends')
        .then( res => {
            console.log("Fetch Success", res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.error('Could not retrieve information', err)
            dispatch({ type: FETCH_FAIL, payload: err})
        })
}

export const POST_FRIEND = 'POST_FRIEND';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const postFriend = (friend) => (dispatch) => {
    dispatch({ type: POST_FRIEND})
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then( res => {
            console.log('Post was successful', res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data})
        })
        .catch( err => {
            console.log('Error with posting', err);
            dispatch({ type: POST_FAIL, payload: err})
        })
}