import React, { FC } from "react";
import useQuestionDetail from "../../../hooks/useQuestionDetail";

const Edit: FC = () => {
  const { data } = useQuestionDetail()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Edit