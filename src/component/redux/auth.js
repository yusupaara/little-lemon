import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/users";

//create async function
const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios.post(url, userCredentials);
    const response = await request.data.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

//state yang diturunkan dan disimpan di redux
const initialState = {
  loading: false,
  email: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //     changeUser: (state, action) => {
  //         state.loggedIn = true;
  //         state.email = action.payload
  //     },
  //     resetUser: (state) => {
  //         state.loggedIn = false;
  //         state.email = null;
  //     },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.email;
        state.error = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.email = null;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.email = null;
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

// export const { changeUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
