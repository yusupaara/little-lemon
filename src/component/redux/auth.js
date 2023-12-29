import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const url = "http://localhost:4000/users";
const url = "https://nebulous-aquamarine-germanium.glitch.me/users";
//create async function
export const registUser = createAsyncThunk(
  "auth/registUser",
  async (userCredentials) => {
    const request = await axios.post(url, userCredentials);
    const response = await request.data;
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials) => {
    const request = await axios.get(url);
    const response = await request.data;
    const userDetect = response.find(user => user.email === userCredentials.email && user.password === userCredentials.password);
    if(userDetect) {
      return userDetect;
    } else {
      throw new Error("Invalid email or password");
    }
  }
);

//state yang diturunkan dan disimpan di redux
const initialState = {
  loading: false,
  users:[],
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      autologin: (state, action) => {
          state.isLoggedIn = true;
          state.users = action.payload;
          state.error= null;
      },
      logout: (state) => {
          state.isLoggedIn = false;
          state.users = [];
          state.error= null;
          localStorage.removeItem("user-little-lemon");
      },
  },
  extraReducers: (builder) => {
    builder
      //Register state
      .addCase(registUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registUser.rejected, (state, action) => {
        state.loading = false;
        state.email = null;
        console.log(action.error.message);
        state.error = action.error.message;
      })
      //Login state
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.email;
        state.error = null;
        state.isLoggedIn = true;
        localStorage.setItem("user-little-lemon", JSON.stringify(state.users));
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

export const { autologin, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.users;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const testingData = initialState;

export default authSlice.reducer;
