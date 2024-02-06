import {createSlice, createAction} from '@reduxjs/toolkit'

const initialState = {
    userData:null
}

export const revertAll = createAction('REVERT_ALL')

export const userSlice = createSlice({
    name:"user data",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers:{
        saveUserData: (state,action) => action.payload
    }
})

export default userSlice