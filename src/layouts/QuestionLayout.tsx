import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import useLoadUserInfo from "../hooks/useLoadUserInfo";
import useNavPage from "../hooks/useNavPage";
import { Spin } from "antd";

const QuestionLayout: FC = () => {
  const { wait } = useLoadUserInfo()
  useNavPage(wait)
  return (
    <>
      <div>
        {wait ? <Spin fullscreen tip="Loading" /> : <Outlet />}
      </div>
    </>
  )
}

export default QuestionLayout