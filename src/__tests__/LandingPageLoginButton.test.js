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
  const lpLoginButton = screen.getByTestId(`lpLoginButton`);
  click(lpLoginButton);
  expect(RedirectToMenuTemp).toHaveBeenCalled;
});
