import { configureStore } from "@reduxjs/toolkit";
import DogsSlice from "../../dogs/data/DogsSlice";
import BloodTestSlice from "../../laboratory/data/BloodTestSlice";


export const store = configureStore({
  reducer: { bloodTest: BloodTestSlice, dogs: DogsSlice },
});

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
