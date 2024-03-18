import { FC, useEffect, useState } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons';
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom';
import { HOME_PATH, MANAGE_LIST_PATH } from '../router';
import useGetUserInfo from '../hooks/useGetUserInfo';

const { Title } = Typography;
const Logo: FC = () => {
  const { username } = useGetUserInfo()
  const [path, setPath] = useState(HOME_PATH)
  useEffect(() => {
    if (username) setPath(MANAGE_LIST_PATH)
  }, [username])
  return (
    <div className={styles.container}>
      <Link to={path}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>
            小慕问卷
          </Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo