import { FC } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../router'
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutReducer } from '../store/userReducer'
import useGetUserInfo from '../hooks/useGetUserInfo';

const UserInfo: FC = () => {
  const dispatch = useDispatch()
  const { username, nickname } = useGetUserInfo()
  const userInfo = (
    <>
      <UserOutlined />
      <span>{nickname}</span>
      <Button type='link' onClick={() => dispatch(logoutReducer())}>退出登陆</Button>
    </>
  )
  const login = (
    <Link to={LOGIN_PATH}>登陆</Link>
  )
  return (
    <div>
      {username ? userInfo : login}
    </div>
  )
}

export default UserInfo