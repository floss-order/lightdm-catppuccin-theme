import React from "react";
import "./Image.css"
import logo from "./Image.jpg"

function Image() {
  return (
    <img className="image" src={logo} />
  )
}

export default Image;