const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import React from "react";
import "@testing-library/jest-dom";
import LandingPage from "../Pages/LandingPage";
import { render, screen } from "@testing-library/react";

test("The landing page displays the correct info", () => {
  render(<LandingPage />);
  expect(
    screen.getByText("Ask the host for the session code.")
  ).toBeInTheDocument();
});
