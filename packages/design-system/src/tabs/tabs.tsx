import React from 'react';
import { Tabs } from 'antd';

type DSTabsProps = {
  id: string;
  children?: React.ReactNode;
  items?: any;
};

const DSTabs: React.FC<DSTabsProps> = ({
  children,
  items,
  id
}) => {
    return (
      <Tabs
        id={id || 'main-tabs'}
        defaultActiveKey='1'
        items={items}
      />
    )
  };

export default DSTabs;