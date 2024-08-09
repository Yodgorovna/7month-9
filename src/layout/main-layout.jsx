import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex">
      <div className="h-screen bg-blue-500 p-[20px] w-[300px]">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/category-list"}>Category list</Link>
        </div>
      </div>
      <div className="w-full flex-grow-1 p-7">
        <Outlet />
      </div>
    </div>
  );
};
