import { BloodTest } from "../domain/BloodTestEntity";
import TranslateRisk from "./TranslateRisk";

const BloodTestTable = ({ bloodTests }: { bloodTests: BloodTest[] }) => {
  return (
    <table id="table-blood-tests" width="100%">
      <thead>
        <tr>
          <th>Núm. de Identificación</th>
          <th>Azúcar</th>
          <th>Grasa</th>
          <th>Oxígeno</th>
          <th>Nivel de Riesgo</th>
        </tr>
      </thead>
      <tbody>
        {bloodTests?.map(({ idNumber, sugar, fat, oxygen, risk }, index) => (
          <tr key={`row-blood-test-${idNumber}-${index}`}>
            <td align="center">{idNumber}</td>
            <td align="left">{sugar}%</td>
            <td align="left">{fat}%</td>
            <td align="left">{oxygen}%</td>
            <td align="center">
              <TranslateRisk risk={risk} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BloodTestTable;
