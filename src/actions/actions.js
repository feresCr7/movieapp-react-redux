import { ADD_MOVIE ,REMOVE_MOVIE,  EDIT_MOVIE, FILTER } from './types'

export const addMovie = (newMovie) => {
    return {
        type: ADD_MOVIE,
        payload: newMovie
    }
}
export const removeMovie = (id) => {
    return {
        type: REMOVE_MOVIE,
        payload: id
    }
}
export const editMovie = (editedmovie) => {
    return {
        type: EDIT_MOVIE,
        payload: editedmovie
    }
}
export const filter = data => {
    return {
      type: FILTER,
      payload: data
    }
}








