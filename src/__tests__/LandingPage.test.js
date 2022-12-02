import React from "react";
import "@testing-library/jest-dom";
import LandingPage from "../Pages/LandingPage";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

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
test("Button redirects to correct page", async () => {
  render(<LandingPage />);

  const user = userEvent.setup();
  const input = screen.getByTestId("codeInput");

  fireEvent.change(input, { target: { value: "1234" } });
  await user.click(screen.getByTestId("button-redir"));

  expect(mockedUsedNavigate).toHaveBeenCalledWith("/Menu");
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
});
