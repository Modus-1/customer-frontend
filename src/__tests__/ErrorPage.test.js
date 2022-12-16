import React from "react";
import "@testing-library/jest-dom";
import ErrorPage from "../Pages/ErrorPage";
import { render, screen } from "@testing-library/react";

test("The error page gives an error message", () => {
  render(<ErrorPage />);
  let messageelement = screen.getByTestId("ep-message");
  expect(messageelement).toBeInTheDocument();
});
