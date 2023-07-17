import { useCards } from "../useCards";

export const UsePage = () => {
  const { setItemOffset } = useCards();

  const resetPage = () => {
    setItemOffset(0);
    const activePage = document.querySelector(".active");
    const numberClasses = document.querySelector(".page-item.number");

    if (activePage) {
      activePage.classList.remove("active");
    }

    if (numberClasses) {
      numberClasses.classList.add("active");
    }
  };

  return { resetPage };
};
