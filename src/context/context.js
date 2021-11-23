import React, { useState, createContext } from "react";
export const ModalContext = createContext();

const ContextProvider = (props) => {
  const [selectChamp, setSelectChamp] = useState([]);
  return (
    <ModalContext.Provider
      value={{
        selectChamp,
        setSelectChamp,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ContextProvider;
