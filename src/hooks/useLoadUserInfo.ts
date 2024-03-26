import { useEffect, useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import { useRequest } from "ahooks";
import { getUserInfo } from "../api/user"
import { useDispatch } from "react-redux";
import { loginReducer } from "../store/userReducer";

function useLoadUserInfo() {
  const dispatch = useDispatch()
  const [wait, serWait] = useState(true)
  const { username } = useGetUserInfo()
  const { run } = useRequest(getUserInfo, {
    manual: true,
    onSuccess: (res) => {
      const { username = "", nickname = "" } = res.data
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally: () => {
      serWait(false)
    }
  })
  useEffect(() => {
    if (username) {
      serWait(false)
      return
    }
    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])
  return {
    wait
  }
}

export default useLoadUserInfo