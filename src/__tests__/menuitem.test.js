import { render, screen, cleanup } from "@testing-library/react";
import MenuItem from "../Components/MenuItem";
import "@testing-library/jest-dom";

test("should render menu component", () => {
  const menuItem = {
    id: "1",
    name: "Nasi",
    shortDescription: "lol",
    longDescription: "troll",
    fakeNews: "Donald Trump",
  };
  render(<MenuItem dish={menuItem} />);
  const menuItemElement = screen.getByTestId(`mItem-${menuItem.id}`);
  expect(menuItemElement).toBeInTheDocument();
  expect(menuItemElement).toHaveTextContent(menuItem.name);
  expect(menuItemElement).toHaveTextContent(menuItem.shortDescription);
  expect(menuItemElement).toHaveTextContent(menuItem.longDescription);
  expect(menuItemElement).not.toHaveTextContent(menuItem.fakeNews);
});
