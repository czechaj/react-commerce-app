import { useContext, createContext, useState, useEffect } from "react";

const BoxContext = createContext();

const BoxProvider = ({ children }) => {
  const [box, setBox] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(box));
  }, [box]);

  const addToBox = (item, itemInBasket) => {
    if (!itemInBasket) {
      setBox((state) => [...state, item]);
    } else {
      const filtered = box.filter((product) => product.id !== item.id);
      setBox(filtered);
    }
  };

  const clearBox = () => {
    setBox([]);
  };

  const values = {
    box,
    setBox,
    addToBox,
    clearBox,
  };

  return <BoxContext.Provider value={values}>{children}</BoxContext.Provider>;
};

const useBox = () => useContext(BoxContext);

export { useBox, BoxProvider };
