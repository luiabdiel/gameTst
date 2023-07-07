import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Cards } from ".";
import { mockGameData } from "../../mock";

describe("Cards component", () => {
  it("Should render the image", () => {
    const { getByRole } = render(
      <Cards
        thumbnail={mockGameData.thumbnail}
        title={mockGameData.title}
        genre={mockGameData.genre}
      />
    );

    expect(getByRole("img")).toBeInTheDocument();
  });

  it("Should render the title", () => {
    const { getByText } = render(
      <Cards
        thumbnail={mockGameData.thumbnail}
        title={mockGameData.title}
        genre={mockGameData.genre}
      />
    );

    expect(getByText("Ark")).toBeInTheDocument();
  });

  it("Should render the genre", () => {
    const { getByText } = render(
      <Cards
        thumbnail={mockGameData.thumbnail}
        title={mockGameData.title}
        genre={mockGameData.genre}
      />
    );

    expect(getByText("Shooter")).toBeInTheDocument();
  });
});
