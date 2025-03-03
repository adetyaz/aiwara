import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import "@testing-library/jest-dom";

test("renders button correctly", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
