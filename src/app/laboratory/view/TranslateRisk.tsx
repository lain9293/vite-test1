import { ResultDiseaseValidation } from "../domain/Validator";
import "./TranslateRisk.css";

const SPANISH_RISKS = {
  HIGH: "Alto",
  MIDDLE: "Medio",
  LOW: "Bajo",
  NOT_VALID: "Revise los datos ingresados",
};

const TranslateRisk = ({ risk }: { risk: ResultDiseaseValidation }) => {
  return risk ? (
    <span className={`translate-risk translate-risk--${risk}`}>
      {SPANISH_RISKS[risk]}
    </span>
  ) : null;
};

export default TranslateRisk;
