import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from ".";
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

describe("Header", () => {
  it("Should render the site logo", () => {
    const { getByText } = render(<Header />)

    const titleElement = getByText('App Masters Games');
    expect(titleElement).toBeInTheDocument();
  });
});
