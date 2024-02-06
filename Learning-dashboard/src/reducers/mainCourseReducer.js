import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
    courseData: null
}

export const revertAll = createAction('REVERT_ALL')
export const courseSlice = createSlice({
    name: "course data",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        saveCourseData: (state, action) => action.payload
    }

})

export default courseSlice