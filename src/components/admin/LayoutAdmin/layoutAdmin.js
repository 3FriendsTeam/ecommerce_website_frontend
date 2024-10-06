import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Admin/Admin";
import Login1 from "../LoginPage/Login1";
import Signup from "../SignupPage/Signup";

const LayoutAdmin = () => {
  return (
    <Routes>
      <Route path="" element={<Admin />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default LayoutAdmin;
