import React, { createContext, useState } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItem from "../Components/MenuItem";
import "@testing-library/jest-dom";

import { CheckoutContext } from "../Components/OrderReviewContext";

afterEach(() => {
  cleanup();
});

test("should render menu component", () => {
  const menuItem = {
    id: "1",
    name: "Nasi",
    shortDescription: "lol",
    fakeNews: "Donald Trump",
  };

  function AddMenuItemToOrder() {
    console.log("added");
  }

  render(
    <CheckoutContext.Provider value={{ AddMenuItemToOrder }}>
      <MenuItem dish={menuItem} />
    </CheckoutContext.Provider>
  );
  const menuItemElement = screen.getByTestId(`mItem-${menuItem.id}`);
  expect(menuItemElement).toBeInTheDocument();
  expect(menuItemElement).toHaveTextContent(menuItem.name);
  expect(menuItemElement).toHaveTextContent(menuItem.shortDescription);
  expect(menuItemElement).not.toHaveTextContent(menuItem.fakeNews);
});
