import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";
const baseQueryConfig = {
  baseUrl: `${process.env.REACT_APP_API_BASE_URL}/api/`,
  prepareHeaders: (headers: Headers, { getState }: { getState: any }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `JWT ${token}`);
    }
    return headers;
  },
};

export const fetchBaseQueryWithToken = fetchBaseQuery(baseQueryConfig);
export const basicFetch = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_BASE_URL}/api/`,
});
