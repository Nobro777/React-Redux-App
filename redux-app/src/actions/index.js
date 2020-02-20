import axios from 'axios'

export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE'
export const FETCH_CHARACTER_LOAD = 'FETCH_CHARACTER_LOAD'


export const getCharacter = () => dispatch => {
    dispatch({ type: FETCH_CHARACTER_LOAD })
    axios.get('https://rickandmortyapi.com/api/character/')
    .then( res => {
        console.log(res)
        dispatch({type: FETCH_CHARACTER_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
        console.log("there was an error :", err)
        dispatch({type: FETCH_CHARACTER_FAILURE, payload: err})
    })
}