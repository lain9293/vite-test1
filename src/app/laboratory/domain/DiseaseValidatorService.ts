import { BloodTest } from "./BloodTestEntity";
import { Disease } from "./Disease";
import { ResultDiseaseValidation, Validator } from "./Validator";

export class DiseaseValidatorService {
  constructor(private disease: Disease) {}

  public validate(bloodTest: BloodTest): ResultDiseaseValidation {
    const result: ResultDiseaseValidation = this.disease
      .getValidators()
      .map((validator: Validator) => validator(bloodTest))
      .find((result) => result !== "NOT_VALID");

    if (result) return result;

    return "NOT_VALID";
  }
}
