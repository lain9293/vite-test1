import React from "react";
import { BloodTest } from "../domain/BloodTestEntity";
import { BloodTestStore } from "../domain/BloodTestStore";
import { filterBloodTestUseCase } from "../useCase/FilterBloodTestUseCase";

function useFilterBloodTestController(store: BloodTestStore) {
  const filterBloodTest = React.useCallback(
    (idNumber: BloodTest["idNumber"]) =>
      filterBloodTestUseCase({ bloodTests: store.bloodTests }, idNumber),
    [store.bloodTests]
  );

  return {
    bloodTests: store.bloodTests,
    filterBloodTest,
  };
}

export { useFilterBloodTestController };
