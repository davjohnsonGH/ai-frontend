"use client";

import React, { useState, useEffect } from 'react';
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
import DSButton from '../button/button';
import DSHeader from '../header/header';
import DSContent from '../content/content';
import DSMenu from '../menu/menu';
import DSSider from '../sider/sider';
import styles from './appshell.module.css';

type AppShellProps = {
  id?: string;
  children: React.ReactNode;
  headerTitle?: string;
  headerDescription?: string;
};

const AppShell: React.FC<AppShellProps> = ({
  children,
  headerTitle,
  headerDescription }) => {

  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <Layout>
      <DSSider trigger={false} collapsible collapsed={collapsed}>
        <div className={styles['logo-vertical']} >
            <a href="/">
              <HomeOutlined/>
              <span className={styles['home-text']} >Home</span>
            </a>
        </div>
        <DSMenu
            id='main-menu'
            defaultSelectedKeys={[]}
        />
      </DSSider>
      <Layout>
        <DSHeader
            id="main-header"
            headerTitle={loading === false ? headerTitle : "Design System" }
            headerDescription={headerDescription || "This is the Design System"}
        >
        <DSButton
            id="toggle-menu"
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />
        </DSHeader>
        <DSContent id='main-content'>
            {children}
        </DSContent>
      </Layout>
    </Layout>
  );
};

export default AppShell;