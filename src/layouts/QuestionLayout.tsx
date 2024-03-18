import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import useLoadUserInfo from "../hooks/useLoadUserInfo";
import useNavPage from "../hooks/useNavPage";

const QuestionLayout: FC = () => {
  const { wait } = useLoadUserInfo()
  useNavPage(wait)
  return (
    <>
      <div>QuestionLayouts</div>
      <div>
        {!wait && <Outlet />}
      </div>
    </>
  )
}

export default QuestionLayout