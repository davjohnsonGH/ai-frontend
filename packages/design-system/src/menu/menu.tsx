'use client';

import items from './items';
import { usePathname } from 'next/navigation';
import { Menu } from 'antd';

type DSMenuProps = {
  id: string;
  children?: React.ReactNode;
  theme?: any;
  mode?: any;
  defaultSelectedKeys?: [];
  items?: [any]
};
const DSMenu: React.FC<DSMenuProps> = ({
  id,
  theme,
  mode
}) => {

  const pathname = usePathname();

  // Find the menu item whose path matches the current route
  const selectedKey =
    items?.find(item => pathname.startsWith(item.path))?.key || '1';

  return (
    <Menu
      id={id}
      theme={ theme || 'light' }
      mode={mode || 'inline'}
      defaultSelectedKeys={[selectedKey]}
      items={items}
    />
  );
};

export default DSMenu;
