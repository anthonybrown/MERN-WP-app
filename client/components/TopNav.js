import { AppstoreOutlined, ControlOutlined, SettingOutlined, RocketOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import ToggleTheme from './ToggleTheme'

const items = [
  {
    label: 'CMS',
    key: 'mail',
    icon: <ControlOutlined /> ,
  }, {
    label: 'SignUp',
    key: 'sign-up',
    icon: <MailOutlined /> ,
  },
  {

  },
  {
    label: 'Admin',
    key: 'admin',
    className: "right",
    icon: <RocketOutlined />,
    children: [
      {
        type: 'group',
        label: 'DashBoard',
        children: [
          {
            label: 'Sign up',
            key: 'sign-up',
          },
          {
            label: 'Sign in',
            key: 'sign-in',
          },
        ],
      },
      {
        type: 'group',
        label: 'Registration',
        children: [
          {
            label: 'Register',
            key: 'register',
          },
          {
            label: 'Sign out',
            key: 'sign-out',
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