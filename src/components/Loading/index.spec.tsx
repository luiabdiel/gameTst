import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Loading } from ".";

describe("Loading component", () => {
  it("should render the loading component", () => {
    const { getByText } = render(<Loading />);

    expect(getByText("Carregando...")).toBeInTheDocument();
  });
});
