const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import React from "react";
import "@testing-library/jest-dom";
import LandingPage from "../Pages/LandingPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "@remix-run/router";

test("The landing page displays the correct info", () => {
  render(<LandingPage />);
  expect(
    screen.getByText("Ask the host for the session code.")
  ).toBeInTheDocument();
});

test("Code input field loads on page", () => {
  render(<LandingPage />);
  expect(screen.getByTestId("codeInput")).toBeInTheDocument();
});

test("Button loads on page", () => {
  render(<LandingPage />);
  expect(screen.getByText("Log in")).toBeDisabled();
});

test("Button to be enabled with input", () => {
  render(<LandingPage />);
  const input = screen.getByTestId("codeInput");
  fireEvent.change(input, { target: { value: "1234" } });
  expect(screen.getByText("Log in")).toBeEnabled();
});

// TODO: Needs to be fixed
// test("Button redirects to correct page", () => {
//   let history = createMemoryHistory({ initialEntries: ["/LandingPage"] });
//   render(<LandingPage />);
//   const input = screen.getByTestId("codeInput");
//   fireEvent.change(input, { target: { value: "1234" } });
//   fireEvent.click(screen.getByText("Log in"));
//   expect(history.location.pathname).toBe("/Menu");
// });
