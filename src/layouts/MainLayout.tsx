import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayouts</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayouts</div>
    </>
  )
}

export default MainLayout