import { useEffect } from "react";
import useGetUserInfo from "./useGetUserInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_PATH, MANAGE_LIST_PATH, REGISTER_PATH } from "../router";

function useNavPage(wait: boolean) {
  const { username } = useGetUserInfo()
  const nav = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    if (wait) return
    if (username) {
      if (pathname === HOME_PATH || pathname === REGISTER_PATH) {
        nav(MANAGE_LIST_PATH)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, pathname])
}

export default useNavPage