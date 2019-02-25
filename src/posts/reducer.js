const initialState = {
    posts: []
}

const postsReducer = (state = initialState, { type, data }) => {
    switch (type) {
        case 'ADD_POSTS':
            return { posts: data }
        default: 
            return state;
    }
}

export default postsReducer;