import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Loading } from ".";

describe("Loading component", () => {
  it("should render the loading component", () => {
    const {getByTestId} = render(<Loading />)

    const loadingSpinnerElement = getByTestId('loading-spinner');
     expect(loadingSpinnerElement).toBeInTheDocument();
  });
});
