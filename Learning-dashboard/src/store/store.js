import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import toggleSidebarSlice from "../reducers/toggleSidebar";
import LoginSlice from "../reducers/LoginReducer";
import userSlice from "../reducers/userReducer";
import subscribeReducer from "../reducers/subscribeReducer";



const persistConfig = {
  key: 'root',
  storage: storage,
}

const reducer = combineReducers({
  toggleSidebarReducer: toggleSidebarSlice.reducer,
  LoginReducer: LoginSlice.reducer,
  userReducer : userSlice.reducer,
  subscribeReducer,

})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
})
