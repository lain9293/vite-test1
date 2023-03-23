interface ValidatedInput {
  errorText: string;
  hasError: boolean;
}

export const ERROR_MESSAGES_INPUT_NAME = {
  idNumber: () => `El número de identificación debe ser numérico.`,
  fat: (fat: string) =>
    `El porcentaje de grasa permite los siguientes formatos: 100, 99.5, 0.3, se recibio: (${fat}).`,
  oxygen: (oxygen: string) =>
    `El porcentaje de oxígeno permite los siguientes formatos: 100, 99.5, 0.3, se recibio (${oxygen}).`,
  sugar: (sugar: string) =>
    `El porcentaje de azúcar permite los siguientes formatos: 100, 99.5, 0.3, se recibio (${sugar}).`,
};

const validatePercentages = (percentage: string) =>
  Number(percentage) >= 0 && Number(percentage) <= 100;

const INPUT_VALIDATIONS = {
  idNumber: (idNumber: string) => Number(idNumber) >= 0,
  fat: (fat: string): boolean => validatePercentages(fat),
  oxygen: (oxygen: string): boolean => validatePercentages(oxygen),
  sugar: (sugar: string): boolean => validatePercentages(sugar),
};

export type KeyInputValidations = keyof typeof INPUT_VALIDATIONS;

const validateInput = (
  inputName: keyof typeof INPUT_VALIDATIONS,
  inputValue: string
): ValidatedInput => {
  const validation = INPUT_VALIDATIONS[inputName];
  const isValidInputValue = validation(inputValue);

  return {
    hasError: !isValidInputValue,
    errorText: ERROR_MESSAGES_INPUT_NAME[inputName](inputValue),
  };
};

export default validateInput;
