import { Button } from 'antd';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

const NavLinkComponent: React.FC = () => {
  return (
    <ul className="flex items-center -ml-[2%]">
      <li>
        <CustomNavLink to="/">Home</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/watch/0">TV Show</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/watch/0">Drama</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/watch/0">Movie</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/watch/0">Sports</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/watch/0">eSports</CustomNavLink>
      </li>
    </ul>
  );
};

export default NavLinkComponent;

const CustomNavLink: React.FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button size="large" className="border-none shadow-none bg-transparent transition-none">
        <span className="font-medium">{children}</span>
      </Button>
    </Link>
  );
};
