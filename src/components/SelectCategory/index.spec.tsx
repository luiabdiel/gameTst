import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SelectCategory, SelectCategoryProps } from ".";
import { mockGameData, mockStateSetter, mockString } from "../../mock";

describe("SelectCategory", () => {
  it("Should render options message", () => {
    const props: SelectCategoryProps = {
      setFilteredByCategory: mockStateSetter,
      filteredByCategory: mockString,
      gameData: [mockGameData],
    };

    const { getByText } = render(<SelectCategory {...props} />);

    expect(getByText("Selecione a categoria")).toBeInTheDocument();
  });
});
