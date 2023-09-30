import React from "react";
import LoginForm from "../LoginForm";
import loginImage from "../../assets/login-image.jpg";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex items-start gap-0">
      <div className="w-[750px] h-full">
        <img
          src={loginImage}
          alt="Login background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Layout;
