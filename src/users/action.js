const ADD_USERS = 'ADD_USERS'
const DISPLAY_USERS = 'DISPLAY_USERS'

export const addUsers = (data) => {
    return { type: ADD_USERS, data }
}

export const displayUsers = (data) => {
    return { type: DISPLAY_USERS, data }
}