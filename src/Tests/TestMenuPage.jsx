import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuPage from "../Pages/MenuPage";

const server = setupServer(
  rest.get("/mockMenu", (result, context) => {
    return result(
      context.json([
        {
          id: "1",
          name: "Nasi",
          shortDescription: "lol",
          longDescription: "troll",
        },
        {
          id: "2",
          name: "Bami",
          shortDescription: "lol",
          longDescription: "troll",
        },
        {
          id: "3",
          name: "Mihoen",
          shortDescription: "lol",
          longDescription: "troll",
        },
        {
          id: "4",
          name: "Babi Pangang",
          shortDescription: "lol",
          longDescription: "troll",
        },
        {
          id: "5",
          name: "Stokbrood",
          shortDescription: "lol",
          longDescription: "troll",
        },
      ])
    );
  })
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("loads and displays menu items", async () => {
  // Arrange
  render(<Fetch url="/mockMenu" />);
  // Act

  // Assert
});

test("handles server error", async () => {
  server.use(
    // override the initial "GET /greeting" request handler
    // to return a 500 Server Error
    rest.get("/mockMenu", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  // ...
});
