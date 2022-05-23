import { useContext, createContext, useState } from "react";

const BoxContext = createContext();

const BoxProvider = ({ children }) => {
  const [box, setBox] = useState([]);

  const addToBox = (item) => {
    const exist = box.find((product) => product.id === item.id);
    if (!exist) {
      setBox((state) => [...state, item]);
    }
  };

  const values = {
    box,
    setBox,
    addToBox,
  };

  return <BoxContext.Provider value={values}>{children}</BoxContext.Provider>;
};

const useBox = () => useContext(BoxContext);

export { useBox, BoxProvider };
