import { ResultDiseaseValidation } from "./Validator";

export interface BloodTest {
  sugar: number;
  fat: number;
  oxygen: number;
  idNumber: string;
  risk: ResultDiseaseValidation;
}
