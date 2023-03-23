import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BloodTest } from "../domain/BloodTestEntity";

export interface BloodTestState {
  bloodTests: BloodTest[]
}

const initialState: BloodTestState = {
  bloodTests: [{ sugar: 75, fat: 88.7, oxygen: 50, idNumber: '1020789456', risk: "HIGH" }]
}

const bloodTestSlice = createSlice({
  name: 'bloodTest',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<BloodTest>) => {
      state.bloodTests.push(action.payload)
    }
  }
})

export const { add } = bloodTestSlice.actions;
export default bloodTestSlice.reducer;