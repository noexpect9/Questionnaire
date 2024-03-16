import { FC } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../router'
import { useRequest } from 'ahooks';
import { getUserInfo } from '../api/user';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const UserInfo: FC = () => {
  const { data: result } = useRequest(getUserInfo)
  const { username, nickname } = result?.data || {}
  const userInfo = (
    <>
      <UserOutlined />
      <span>{nickname}</span>
      <Button type='link'>退出登陆</Button>
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