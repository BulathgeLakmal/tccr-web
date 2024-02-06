const initialState = {
    subscribed : false,
}

const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBSCRIBE':
            return {...state, subscribed:true};
        default:
            return state;
    }
}

export default subscribeReducer;