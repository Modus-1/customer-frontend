const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import React from "react";
import "@testing-library/jest-dom";
import LandingPageLoginButton from "../Components/LandingPageLoginButton";
import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";

test("The landing page correctly leads to menu page", () => {
  const RedirectToMenuTemp = jest.fn();
  render(<LandingPageLoginButton />);
  const qrButton = screen.getByTestId(`qrButton`);
  click(qrButton);
  expect(RedirectToMenuTemp).toHaveBeenCalled;
});
