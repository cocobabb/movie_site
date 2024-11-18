import React from "react";
import { Outlet } from "react-router-dom";
import BasicHeader from "../components/BasicHeader";

export default function MainLayout() {
  return (
    <>
      <BasicHeader></BasicHeader>
      <Outlet></Outlet>
    </>
  );
}
