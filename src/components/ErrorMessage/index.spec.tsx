import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ErrorMessage } from ".";

describe("ErrorMessage", () => {
  it("should render the error message", () => {
    const { getByRole } = render(<ErrorMessage />);

    expect(getByRole("paragraph")).toBeInTheDocument();
  });
});
