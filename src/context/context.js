import React, { useState, createContext } from "react";
export const ModalContext = createContext();

const ContextProvider = (props) => {
  const [selectChamp, setSelectChamp] = useState([]);
  const [power1, setPower1] = useState([]);
  const [power2, setPower2] = useState([]);
  return (
    <ModalContext.Provider
      value={{
        selectChamp,
        setSelectChamp,
        power1,
        setPower1,
        power2,
        setPower2,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ContextProvider;
