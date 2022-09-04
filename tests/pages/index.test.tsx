import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/index";

describe("Testing <HomePage />", () => {
  test("Should render the 'Hacker News' heading", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });
});
