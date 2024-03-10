import { FC } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../router'

const UserInfo: FC = () => {
  return (
    <Link to={LOGIN_PATH}>登陆</Link>
  )
}

export default UserInfo