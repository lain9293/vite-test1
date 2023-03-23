import { BloodTest } from "../domain/BloodTestEntity";
import { BloodTestStore } from "../domain/BloodTestStore";

type FilterBloodTestStore = Pick<BloodTestStore, "bloodTests">;

const filterBloodTestUseCase = (
  store: FilterBloodTestStore,
  idNumber: BloodTest["idNumber"]
) => {
  return store.bloodTests.filter((bloodTest) =>
    bloodTest.idNumber.includes(idNumber)
  );
};

export { filterBloodTestUseCase };

