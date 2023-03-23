import React from "react";
import { BloodTest } from "../domain/BloodTestEntity";
import { BloodTestStore } from "../domain/BloodTestStore";
import { addBloodTestUseCase } from "../useCase/AddBloodTestUseCase";

function useBloodTestController(store: BloodTestStore) {
  const addBloodTest = React.useCallback(
    (bloodTest: BloodTest) => {
      addBloodTestUseCase({ addBloodTest: store.addBloodTest }, bloodTest);
    },
    [store.addBloodTest]
  );

  return {
    addBloodTest,
  };
}

export { useBloodTestController };

