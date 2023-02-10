import React, {useState} from "react";
import {Image} from "../components/Image";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {Modal} from "../components/Modal";
import "./Login.css"

function Login() {
  const [isShowPoweroffModal, setIsShowPoweroffModal] = useState(false);
  
  function onPoweroffHandler() {
    setIsShowPoweroffModal(true);
    console.log(setIsShowPoweroffModal);
  }
  return (
    <div className="container">
      <div className="login">
        <Image />
        <p className="login__username">carnation</p>
        <div className="login__input">
          <Input type="password" placeholder="Password" />        
          <Button>OK</Button>
        </div>
        <div className="login__actions">
          <Button onClick={onPoweroffHandler}>P</Button>
          <Button>R</Button>
          <Button>H</Button>
        </div>
        {isShowPoweroffModal && <Modal title="Poweroff" prompt="Are you sure you want to poweroff?" />}
      </div>
    </div>
  )
}

export default Login;
