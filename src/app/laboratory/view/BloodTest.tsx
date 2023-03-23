import { useState } from "react";
import Button from "../../shared/components/Button";
import validateInput, {
  KeyInputValidations
} from "../../shared/utils/ValidateInput";
import { useBloodTestController } from "../controller/useBloodTestController";
import { useBloodTestStoreImplementation } from "../data/BloodTestStoreImpl";
import { BloodTest } from "../domain/BloodTestEntity";
import "./BloodTest.css";
import BloodTestForm from "./BloodTestForm";
import ErrorMessage from "./ErrorMessage";

function BloodTestView() {
  const store = useBloodTestStoreImplementation();
  const { addBloodTest } = useBloodTestController(store);
  const [errorsInput, setErrorsInput] = useState([
    {
      isValid: false,
      inputName: "idNumber",
      errorText: "",
    },
  ]);
  const [bloodTestForm, setBloodTestForm] = useState<BloodTest>({
    idNumber: "",
    oxygen: 0,
    fat: 0,
    sugar: 0,
    risk: undefined,
  });

  const onChangeForm = (inputName: KeyInputValidations, value: string) => {
    const { hasError, errorText } = validateInput(inputName, value);

    setErrorsInput((prevState) => {
      const errors = prevState.slice();

      const indexInputName = errors.findIndex(
        (error) => error.inputName === inputName
      );

      const errorInput = {
        isValid: !hasError,
        inputName,
        errorText,
      };

      if (indexInputName === -1) {
        errors.push(errorInput);
      } else {
        errors[indexInputName] = errorInput;
      }

      return errors;
    });
    setBloodTestForm((prevState) => ({
      ...prevState,
      [inputName]: value === "" ? 0 : value,
    }));
  };

  const submitForm = () => {
    // validateInput(bloodTestForm);
    addBloodTest(bloodTestForm);
  };

  return (
    <>
      <BloodTestForm state={bloodTestForm} onChangeForm={onChangeForm} />
      <Button
        id="button-blood-test-validate-blood"
        className="button-blood-test"
        text="Validar muestra de sangre"
        isDisabled={errorsInput.filter((error) => !error.isValid).length > 0}
        onClick={submitForm}
      />
      <ErrorMessage errorsInput={errorsInput} />
    </>
  );
}

export default BloodTestView;
