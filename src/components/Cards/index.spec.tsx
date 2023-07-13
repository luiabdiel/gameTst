import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Cards } from ".";
import { mockGameData } from "../../mock";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";

const mockedUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    //@ts-ignore
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
})

describe("Cards component", () => {
  it("Should render the image", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Cards
          rate={mockGameData.rate}
          thumbnail={mockGameData.thumbnail}
          title={mockGameData.title}
          genre={mockGameData.genre}
        />
      </BrowserRouter>
    );

    expect(getByRole("img")).toBeInTheDocument();
  });

  it("Should render the title", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Cards
          rate={mockGameData.rate}
          thumbnail={mockGameData.thumbnail}
          title={mockGameData.title}
          genre={mockGameData.genre}
        />
      </BrowserRouter>
    );

    expect(getByText("Ark")).toBeInTheDocument();
  });

  it("Should render the genre", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Cards
          rate={mockGameData.rate}
          thumbnail={mockGameData.thumbnail}
          title={mockGameData.title}
          genre={mockGameData.genre}
        />
      </BrowserRouter>
    );

    expect(getByText("Shooter")).toBeInTheDocument();
  });
});
