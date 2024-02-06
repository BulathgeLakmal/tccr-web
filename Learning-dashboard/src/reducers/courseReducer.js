const courseReducer = (state = [],action) => {
    if(action.type === 'fetch_course'){
        const courses ={
            1: [ '101' , '102']
        }
        return courses[action.payload] || [];
    }
}

export default courseReducer;