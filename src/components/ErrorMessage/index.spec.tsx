import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ErrorMessage } from ".";

describe("ErrorMessage", () => {
  it("should render the error message", () => {
    const { getByText } = render(<ErrorMessage text="Generic error message" />);

    expect(getByText("Generic error message")).toBeInTheDocument();
  });
});
