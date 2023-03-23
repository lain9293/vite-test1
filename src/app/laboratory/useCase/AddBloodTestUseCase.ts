import { BloodTest } from "../domain/BloodTestEntity";
import { BloodTestStore } from "../domain/BloodTestStore";
import { getRiskBloodTestUseCase } from "../useCase/GetRiskBloodTestUseCase";

type AddBloodTestStore = Pick<BloodTestStore, "addBloodTest">;

const addBloodTestUseCase = (
  store: AddBloodTestStore,
  bloodTest: BloodTest
) => {
  const risk = getRiskBloodTestUseCase(bloodTest);
  const bloodTestWithRisk = {
    ...bloodTest,
    risk,
  };
  return store.addBloodTest(bloodTestWithRisk);
};

export { addBloodTestUseCase };

