import { BloodTest } from "./BloodTestEntity";

export type ResultDiseaseValidation = "HIGH" | "MIDDLE" | "LOW" | "NOT_VALID" | undefined;

export type Validator = (bloodTest: BloodTest) => ResultDiseaseValidation;
