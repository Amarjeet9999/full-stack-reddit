import React from "react";
import "./Buttoncss.css";
import { ShowContext } from "../../Context/Login.Register";

export const Button = ({ secondary, tertiary, label }) => {
  const { setShow } = React.useContext(ShowContext);

  if (tertiary) {
    return <div className="button tertiary-button">{label}</div>;
  } else if (secondary) {
    return (
      <div
        onClick={() => setShow("showLogin")}
        className="button secondary-button"
      >
        {label}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => setShow("showRegister")}
        className="button primary-button"
      >
        {label}
      </div>
    );
  }
};
