import {
  Middleware,
  MiddlewareAPI,
  createListenerMiddleware,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { setCustomError, setError } from "../slices/auth";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn("We got a rejected action!");
      api.dispatch(setError(action.error.message as string));
    }

    return next(action);
  };
const throttle = async (listenerApi: any, timeout: number) => {
  listenerApi.unsubscribe();
  await listenerApi.delay(timeout);
  listenerApi.subscribe();
};
export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setError,
  effect: async (action, listenerApi) => {
    console.log(action);
    console.log("Starting the lifecycle of the listener");
    throttle(listenerApi, 50000);
    listenerApi.cancelActiveListeners();
  },
});
