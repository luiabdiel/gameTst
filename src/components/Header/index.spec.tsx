import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("Should render the site logo", () => {
    const { getByRole } = render(<Header />);

    expect(getByRole("heading")).toBeInTheDocument();
  });
});
