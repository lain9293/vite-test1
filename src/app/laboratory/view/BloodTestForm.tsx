import Input from "../../shared/components/Input";
import { KeyInputValidations } from "../../shared/utils/ValidateInput";
import { BloodTest } from "../domain/BloodTestEntity";

interface BloodTestForm {
  state: BloodTest;
  onChangeForm: (inputName: KeyInputValidations, value: string) => void;
}

const BloodTestForm = ({ state, onChangeForm }: BloodTestForm) => {
  const onChange = (inputName: KeyInputValidations, value: string) => {
    onChangeForm(inputName, value);
  };

  return (
    <form className="blood-test-form">
      <div className="blood-test-form__input">
        <Input
          id="blood-test"
          name="idNumber"
          pattern="[0-9]*"
          value={state.idNumber}
          labelText="Número de identificación"
          maxLength={15}
          onChange={(value) => onChange("idNumber", value)}
        />
      </div>
      <div className="blood-test-form__input">
        <Input
          id="blood-test"
          name="sugar"
          pattern="[0-9]{1,3}\.{0,1}[0-9]{0,1}"
          value={state.sugar}
          labelText="Porcentaje de azúcar"
          maxLength={4}
          onChange={(value) => onChange("sugar", value)}
        />
      </div>
      <div className="blood-test-form__input">
        <Input
          id="blood-test"
          name="fat"
          pattern="[0-9]{1,3}\.{0,1}[0-9]{0,1}"
          value={state.fat}
          labelText="Porcentaje de grasa"
          maxLength={4}
          onChange={(value) => onChange("fat", value)}
        />
      </div>
      <div className="blood-test-form__input">
        <Input
          id="blood-test"
          name="oxygen"
          pattern="[0-9]{1,3}\.{0,1}[0-9]{0,1}"
          value={state.oxygen}
          labelText="Porcentaje de oxígeno"
          maxLength={4}
          onChange={(value) => onChange("oxygen", value)}
        />
      </div>
    </form>
  );
};

export default BloodTestForm;
