import { renderHook } from "@testing-library/react-hooks";
import { InputSearchProvider } from "../../context/InputSearchContext";
import { useInputSearch } from ".";

describe("useInputSearch", () => {
  it("should return inputFilter and setInputFilter from InputSearchContext", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <InputSearchProvider>{children}</InputSearchProvider>
    );

    const { result } = renderHook(() => useInputSearch(), {
      wrapper: wrapper as React.ComponentType,
    });

    expect(result.current.inputFilter).toBe("");

    result.current.setInputFilter("example");

    expect(result.current.inputFilter).toBe("example");
  });
});
