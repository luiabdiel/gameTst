import { renderHook } from "@testing-library/react-hooks";
import { FavoriteProvider } from "../../context/FavoritesContext";
import { useFavorite } from ".";

describe("useFavorite", () => {
  it("should return favorites, onFavorites, setFavorites, and setOnFavorites from FavoriteContext", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteProvider>{children}</FavoriteProvider>
    );

    const { result } = renderHook(() => useFavorite(), { wrapper });

    expect(result.current.favorites).toEqual([]);
    expect(result.current.onFavorites).toBe(false);

    const newFavorites = [
      {
        id: 1,
        name: "Game 1",
        thumbnail: "thumbnail1.jpg",
        title: "Game 1",
        genre: "Genre 1",
      },
      {
        id: 2,
        name: "Game 2",
        thumbnail: "thumbnail2.jpg",
        title: "Game 2",
        genre: "Genre 2",
      },
    ];
    const newOnFavorites = true;
    result.current.setFavorites(newFavorites);
    result.current.setOnFavorites(newOnFavorites);

    expect(result.current.favorites).toEqual(newFavorites);
    expect(result.current.onFavorites).toBe(newOnFavorites);
  });
});
