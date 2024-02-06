
const tutorReducer  = (state = [], action) => {
    if(action.type === 'follow_tutor'){
        return [...state, action.payload]
    }
    return state;

}

export default tutorReducer;

