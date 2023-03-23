/* eslint-disable react-hooks/rules-of-hooks */
import { configureStore } from "@reduxjs/toolkit";
import { render, RenderResult, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";

import { AppRootState } from "../../main/data/appStore";
import BloodTestSlice from "../data/BloodTestSlice";
import BloodTestView from "./BloodTest";

import { useBloodTestController } from "../controller/useBloodTestController";

jest.mock("../data/BloodTestStoreImpl");
jest.mock("../controller/useBloodTestController");

const mockedBloodTestController = useBloodTestController as jest.MockedFunction<
  typeof useBloodTestController
>;

describe("Test for BloodTest component", () => {
  beforeAll(() => {
    mockedBloodTestController.mockImplementation(() => {
      return {
        addBloodTest: () => {
          console.log();
        },
      };
    });
  });
  beforeEach(() => {
    renderComponent(<BloodTestView />, {});
  });

  test("addBloodTest is called when all fields are filled", async () => {
    await user.type(
      screen.getByRole("textbox", {
        name: /número de identificación/i,
      }),
      "1"
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /porcentaje de azúcar/i,
      }),
      "60"
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /porcentaje de grasa/i,
      }),
      "70"
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /porcentaje de oxígeno/i,
      }),
      "80"
    );
    await user.click(
      screen.getByRole("button", {
        name: /validar muestra de sangre/i,
      })
    );

    expect(mockedBloodTestController).toHaveBeenCalled();
  });
});

function renderComponent(
  ui: React.ReactElement,
  {
    preloadedState,
    ...renderOptions
  }: {
    preloadedState?: Omit<AppRootState, "dogs">;
  }
): RenderResult {
  const store = configureStore({
    reducer: { bloodTest: BloodTestSlice },
    preloadedState,
  });
  interface ProviderProps {
    children?: NonNullable<React.ReactNode>;
  }

  const Wrapper: React.FC<ProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
