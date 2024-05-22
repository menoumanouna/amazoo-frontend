import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import { loginApi } from "./apis/auth/login.api";
import { animalsApi } from "./apis/animal/animal.api";
import { habitatsApi } from "./apis/habitat/habitat.api";
import { servicesApi } from "./apis/services/service.api";
import { usersApi } from "./apis/users/user.api";
import { reportsApi } from "./apis/points/point.api";
import { viewsApi } from "./apis/views/view.api";
import { contactApi } from "./apis/contact/contact.api";

export const reducers = combineReducers({
  auth: authSlice,
  [loginApi.reducerPath]: loginApi.reducer,
  [animalsApi.reducerPath]: animalsApi.reducer,
  [habitatsApi.reducerPath]: habitatsApi.reducer,
  [servicesApi.reducerPath]: servicesApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [viewsApi.reducerPath]: viewsApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      loginApi.middleware,
      animalsApi.middleware,
      habitatsApi.middleware,
      servicesApi.middleware,
      usersApi.middleware,
      reportsApi.middleware,
      viewsApi.middleware,
      contactApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
