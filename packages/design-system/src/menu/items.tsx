import Link from "next/link";
import {
  SunOutlined,
  RocketOutlined,
  RobotOutlined,
  TeamOutlined,
} from '@ant-design/icons';


const items = [
  {
    key: '1',
    icon: <RocketOutlined/>,
    label: <a href="/astro">Astro</a>,
    path: '/astro',
    children: [
      {
        key: '1-1',
        label: <a href="/astro/bot/1">bot 1</a>,
        icon: <RobotOutlined/>,
      },
      {
        key: '1-2',
        label: <a href="/astro/bot/2">bot 2</a>,
        icon: <RobotOutlined/>,
      }
    ]
  },
  {
    key: '2',
    icon: <SunOutlined />,
    label: <a href="/astronomical">Astronomical</a>,
    path: '/astronomical',
    children: [
      {
        key: '2-1',
        label: <a href="/astronomical/bot/1">Bot 1</a>,
        icon: <RobotOutlined/>,
      },
      {
        key: '2-2',
        label: <a href="/astronomical/bot/2">Bot 2</a>,
        icon: <RobotOutlined/>,
      }
    ]
  },
  {
    key: '3',
    icon: <TeamOutlined/>,
    label: <Link href="/about">About us</Link>,
    path: '/about'
  },
];

export default items;
