import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../main/data/appStore";
import { BloodTest } from "../domain/BloodTestEntity";
import { BloodTestStore } from "../domain/BloodTestStore";
import { add, BloodTestState } from "./BloodTestSlice";

const bloodTestSelector = (state: AppRootState) => state.bloodTest;

const useBloodTestStoreImplementation = (): BloodTestStore => {
  const { bloodTests } = useSelector<AppRootState, BloodTestState>(bloodTestSelector);

  const dispatch = useDispatch();

  const addBloodTest = React.useCallback(
    (bloodTest: BloodTest) => {
      dispatch(add(bloodTest));
    },
    [dispatch]
  );

  return {
    bloodTests,
    addBloodTest,
  };
};

export { useBloodTestStoreImplementation };
