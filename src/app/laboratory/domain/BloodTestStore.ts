import { BloodTest } from "./BloodTestEntity";

interface BloodTestStore {
  bloodTests: BloodTest[];
  addBloodTest: (bloodTest: BloodTest) => void;
}

export type { BloodTestStore };
