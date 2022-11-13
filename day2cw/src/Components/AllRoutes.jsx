import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Middle } from "./Middle";
import { LandingPage } from "./LandingPage";
import { Community } from "./Community";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/middle" element={<Middle />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
    </div>
  );
};
