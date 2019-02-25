const initialState = {
    users: []
}

const usersReducer = (state = initialState, { type, data }) => {
    switch (type) {
        case 'ADD_USERS':
            return { users: data }
        case 'DISPLAY_USERS':
            return { users: data }
        default: 
            return state;
    }
}

export default usersReducer;