import React from "react";
import "./Button.css";

function Button({type, onClick, children, ...props}) {
  return <button className="button" type={type} onClick={onClick} {...props}>{children}</button>
}

export default Button;
