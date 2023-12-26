import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/users";

//create async function
export const registUser = createAsyncThunk(
  "auth/registUser",
  async (userCredentials) => {
    const request = await axios.post(url, userCredentials);
    const response = await request.data;
    // localStorage.setItem("user", JSON.stringify(response));
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
      localStorage.setItem("user", JSON.stringify(userDetect));
      return userDetect; 
    } else {
      throw new Error("Invalid email or password");
    }
    // localStorage.setItem("user", JSON.stringify(response));
  }

);

//state yang diturunkan dan disimpan di redux
const initialState = {
  loading: false,
  users:[],
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      addUser: (state, action) => {
          state.loggedIn = true;
          state.email = action.payload.email
      },
      logout: (state) => {
          state.loggedIn = false;
          state.email = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.email;
        state.error = null;
      })
      .addCase(registUser.pending, (state) => {
        state.loading = true;
        state.email = null;
        state.error = null;
      })
      .addCase(registUser.rejected, (state, action) => {
        state.loading = false;
        state.email = null;
        console.log(action.error.message);
        state.error = action.error.message;
      })
      // .addCase(loginUser.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.email = action.payload.email;
      //   state.error = null;
      // })
      // .addCase(loginUser.pending, (state) => {
      //   state.loading = true;
      //   state.email = null;
      //   state.error = null;
      // })
      // .addCase(loginUser.rejected, (state, action) => {
      //   state.loading = false;
      //   state.email = null;
      //   console.log(action.error.message);
      //   state.error = action.error.message;
      // });
  },
});

export const { addUser, logout } = authSlice.actions;

export default authSlice.reducer;
