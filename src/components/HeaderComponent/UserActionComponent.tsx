import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';

const UserActionComponent: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Search placeholder="Search..." allowClear enterButton size="large" />
      <Avatar shape="square" alt="user-avt" size="large" icon={<UserOutlined />} />
    </div>
  );
};

export default UserActionComponent;
