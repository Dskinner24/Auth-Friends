import { FETCH_FRIEND, FETCH_SUCCESS, FETCH_FAIL, POST_FRIEND, POST_SUCCESS, POST_FAIL} from '../actions/actions';

const initialState = {
    friends: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FRIEND:
            return {
                ...state, isFetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POST_FRIEND:
            return {
                ...state,
                isPosting: true,
                friends: [...state.friends]
            }
        case POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
                friends: action.payload
            }
        case POST_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default friendsReducer;