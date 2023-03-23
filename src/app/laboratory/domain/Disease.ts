import { Validator } from "./Validator";

export abstract class Disease {
  private validators: Validator[];

  constructor(validators: Validator[]) {
    if (!validators || validators.length === 0) {
      throw new Error("Debe agregar como mínimo un Validator");
    }
    this.validators = validators;
  }

  public getValidators() {
    return this.validators;
  }
}
