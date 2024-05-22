import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../apis/Post";

interface IInit {
  name: string;
}
const initState: IInit = {
  name: "default error",
};
export const errorSlice = createSlice({
  name: "error",
  initialState: initState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCustomError: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postApi.endpoints.getPost.matchRejected,
      (state, action) => {
        state.name = action.error.message as string;
      }
    );
  },
});
export const { setError, setCustomError } = errorSlice.actions;
export default errorSlice.reducer;
