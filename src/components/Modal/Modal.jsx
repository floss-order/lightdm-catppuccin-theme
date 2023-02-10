import React from "react";
import {Button} from "../Button";
import "./Modal.css";

function Modal({title, prompt, onCancel, onOk}) {
  return (
    <div className="modal">
        <p className="modal__title">{title}</p>
        <p className="modal__prompt">{prompt}</p>
        <div className="modal__actions action-buttons">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onOk}>Ok</Button>
        </div>
    </div>
  )
}

export default Modal;
