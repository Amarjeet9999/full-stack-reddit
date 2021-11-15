import React from "react";

export const ShowContext = React.createContext();

export const ShowContextProvider = ({ children }) => {
  const [show, setShow] = React.useState("");
  const [dropDown, setDropDown] = React.useState(false);
  const [browse, setBrowse] = React.useState(false);

  return (
    <ShowContext.Provider
      value={{ show, setShow, dropDown, setDropDown, setBrowse, browse }}
    >
      {children}
    </ShowContext.Provider>
  );
};
