import validateInput, { ERROR_MESSAGES_INPUT_NAME } from "./ValidateInput";

/**
 * TODO: Se puede hacer uso de .each para probar los casos de este util
 */
describe("Tests for validateInput Util", () => {
  test("should return hasError when inputValue is not a valid percentage for inputName: fat", () => {
    const fat = "1001";
    const result = validateInput("fat", fat);

    expect(result.hasError).toBeTruthy();
    expect(result.errorText).toBe(ERROR_MESSAGES_INPUT_NAME.fat(fat));
  });

  test("should return hasError when inputValue is not a valid percentage for inputName: oxygen", () => {
    const oxygen = "1001";
    const result = validateInput("oxygen", oxygen);

    expect(result.hasError).toBeTruthy();
    expect(result.errorText).toBe(ERROR_MESSAGES_INPUT_NAME.oxygen(oxygen));
  });

  test("should return hasError when inputValue is not a valid percentage for inputName: sugar", () => {
    const sugar = "1001";
    const result = validateInput("sugar", sugar);

    expect(result.hasError).toBeTruthy();
    expect(result.errorText).toBe(ERROR_MESSAGES_INPUT_NAME.sugar(sugar));
  });

  test("should not return hasError when inputValue is a valid number for inputName: idNumber", () => {
    const idNumber = "";
    const result = validateInput("idNumber", idNumber);

    expect(result.hasError).toBeFalsy();
    expect(result.errorText).toBe(ERROR_MESSAGES_INPUT_NAME.idNumber());
  });
});
