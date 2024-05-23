import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import SearchComponent from './SearchComponent';

const UserActionComponent: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <SearchComponent />

      <Avatar shape="square" alt="user-avt" size="large" icon={<UserOutlined />} />
    </div>
  );
};

export default UserActionComponent;
