import {  HddOutlined, LoginOutlined, LogoutOutlined, ControlOutlined, SettingOutlined, RocketOutlined, MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react'
import Link from 'next/link'
import ToggleTheme from './ToggleTheme'

const items = [
  {

    label: (
      <Link href='/'>
        <a>CMS</a>
      </Link>
    ),
    key: 'mail',
    icon: <ControlOutlined /> ,
  },
  {
    label: (
      <Link href='/signup'>
        <a>Sign Up</a>
      </Link>
    ),
    key: 'posts',
    icon: <HddOutlined />,
  },
  {
    label: (
      <Link href='/signin'>
        <a>Sign In</a>
      </Link>
    ),
    key: 'contact',
    icon: <MailOutlined />,
  },
  {

  },
  {
    label: (
      <Link href='/admin'>
        <a>Mr Admin</a>
      </Link>
    ),
    key: 'admin',
    className: "right",
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Managment',
        children: [
          {
            label: (
              <Link href='/admin'>
                <a>Dashboard</a>
              </Link>
            ),
            key: 'dashboard',
            icon: <RocketOutlined /> ,
          },
        ],
      },
      {
        type: "group",
        label: 'Others',
        children: [
          {
            label: (
              <Link href='/signout'>
                <a>Sign Out</a>
              </Link>
            ),
            key: 'sign-out',
            icon: <LogoutOutlined /> ,
          },
        ],
      },
    ],
  },
  {
    label: (
      <ToggleTheme />
    ),
    key: 'alipay',
    // className: 'right',
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default TopNav;