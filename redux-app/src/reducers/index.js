import { 
    FETCH_CHARACTER_SUCCESS, 
    FETCH_CHARACTER_FAILURE, 
    FETCH_CHARACTER_LOAD, } from '../actions'


const initialState = {
    characters: [],
    error: '',
    isFetching: false 
}


export function reducer(state=initialState, action ) {
    switch(action.type) {
        case FETCH_CHARACTER_LOAD: 
        return {
            ...state,
            error: '',
            isFetching: true
        }
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: true,
                characters: action.payload
            }
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state 
    }
}
