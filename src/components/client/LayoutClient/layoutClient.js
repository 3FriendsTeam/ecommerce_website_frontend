import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, ForgotPassword, Register } from "../../../components/client";
import HomePage from "../../../containers/client/HomePage";
import { path } from "../../../utils/constant";

const LayoutClient = () => {
  return (
    <Routes>
      <Route path={path.HOMEPAGE} element={<HomePage />} />
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.FORGOTPASSWORD} element={<ForgotPassword />} />
      <Route path={path.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default LayoutClient;
