import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../apis/auth/login.api";

interface IInit {
  token: string | null;
  user: {
    id: number;
    type: string;
    username: string;
  } | null;
}
const initState: IInit = {
  token: localStorage.getItem("token") || "",
  user:
    localStorage.getItem("user") !== null &&
    localStorage.getItem("user") !== undefined
      ? (JSON.parse(localStorage.getItem("user")!) as unknown as {
          id: number;
          type: string;
          username: string;
        })
      : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, action) => {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        state.token = action.payload.token;
        state.user = action.payload.user;
      }
    );
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
