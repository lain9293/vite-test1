import { BloodTest } from "../domain/BloodTestEntity";
import { DiseaseExample } from "../domain/DiseaseExample";
import { DiseaseValidatorService } from "../domain/DiseaseValidatorService";

/**
 * TODO: Agregar inyección de dependencias
 *
 * @param bloodTest
 * @returns
 */
const getRiskBloodTestUseCase = (bloodTest: BloodTest) => {
  const covid = new DiseaseExample();

  const diseaseValidatorService = new DiseaseValidatorService(covid);

  return diseaseValidatorService.validate(bloodTest);
};

export { getRiskBloodTestUseCase };

