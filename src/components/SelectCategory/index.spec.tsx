import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SelectCategory } from ".";

describe("SelectCategory", () => {
  it("Should render options message", () => {
    const { getByText } = render(<SelectCategory />);

    expect(getByText("Selecione a categoria")).toBeInTheDocument();
  });
});
