import {  HddOutlined, LoginOutlined, LogoutOutlined, ControlOutlined, SettingOutlined, RocketOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import ToggleTheme from './ToggleTheme'

const items = [
  {
    label: 'CMS',
    key: 'mail',
    icon: <ControlOutlined /> ,
  },
  {
    label: 'Posts',
    key: 'posts',
    icon: <HddOutlined />,
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <MailOutlined />,
  },
  {

  },
  {
    label: 'Mr. Admin',
    key: 'admin',
    className: "right",
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Managment',
        children: [
          {
            label: 'Dashboard',
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
            label: 'Sign Out',
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