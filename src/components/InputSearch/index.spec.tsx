import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { InputSearch } from ".";

describe("InputSearch", () => {
  it("Should render the input", () => {
    const { getByRole } = render(<InputSearch />);

    expect(getByRole("form")).toBeInTheDocument();
  });
});
