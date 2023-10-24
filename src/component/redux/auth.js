import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    email: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeUser: (state, action) => {
            state.loggedIn = true;
            state.email = action.payload
        },
        resetUser: (state) => {
            state.loggedIn = false;
            state.email = null;
        },
    },
});

export const { changeUser, resetUser } = authSlice.actions;

export default authSlice.reducer;