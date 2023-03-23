import { BloodTest } from "./BloodTestEntity";
import { Disease } from "./Disease";
import { Validator } from "./Validator";

export class DiseaseExample extends Disease {
  constructor() {
    const validatorsExample: Validator[] = [
      ({ sugar, fat, oxygen }: BloodTest) =>
        sugar > 70 && fat > 88.5 && oxygen < 60 ? "HIGH" : "NOT_VALID",
      ({ sugar, fat, oxygen }: BloodTest) =>
        sugar >= 50 && sugar <= 70 && fat >= 62.2 && fat <= 88.5 && oxygen >= 60 && oxygen <= 70
          ? "MIDDLE"
          : "NOT_VALID",
      ({ sugar, fat, oxygen }: BloodTest) =>
        sugar < 50 && fat < 62.2 && oxygen > 70 ? "LOW" : "NOT_VALID",
    ];
    super(validatorsExample);
  }
}
