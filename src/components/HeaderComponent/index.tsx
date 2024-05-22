import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkComponent from './NavLinkComponent';
import UserActionComponent from './UserActionComponent';

const HeaderComponent: React.FC = () => {
  return (
    <Header className="px-2 py-4 h-20 sticky top-0 z-[1] bg-transparent backdrop-blur-3xl rounded">
      <div className="h-full flex justify-between items-center">
        <Button size="large" className="border-none bg-transparent shadow-none p-0 h-full">
          <Link to="/">
            <span className="h-full flex items-center gap-2">
              <img className="h-full" src="/logo.png" alt="logo" />
              <span className="font-bold text-2xl text-[#31b8ee]">ViEntPlay</span>
            </span>
          </Link>
        </Button>

        <NavLinkComponent />

        <UserActionComponent />
      </div>
    </Header>
  );
};

export default HeaderComponent;
