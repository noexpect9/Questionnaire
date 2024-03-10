import React, { FC } from "react";
import styles from './MainLayout.module.scss'
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Logo from "../components/Logo";
import UserInfo from '../components/UserInfo'

const { Header, Footer, Content } = Layout;
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        小慕问卷 &copy; 2024 - present
      </Footer>
    </Layout>
  )
}

export default MainLayout