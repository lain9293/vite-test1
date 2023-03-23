import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "../../main/data/appStore";
import { DOGS_API_PATH_URL } from "../constants/appParameters";
import { clientGet } from "../domain/DogApiService";

export interface DogsState {
  dogs: string[];
  status: string;
  error: string | undefined;
}

const initialState: DogsState = {
  dogs: [],
  status: "idle",
  error: undefined,
};

export const fetchDogs = createAsyncThunk("dogs/fetchDogs", async () => {
  const response = await clientGet(DOGS_API_PATH_URL);
  return response;
});

const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dogs = state.dogs.concat(action.payload.message);
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dogsSlice.reducer;

export const selectAllDogs = (state: AppRootState) => state.dogs.dogs;
