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
        <CustomNavLink to="#!">TV Show</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="#!">Drama</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="#!">Movie</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="#!">Sports</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="#!">eSports</CustomNavLink>
      </li>
    </ul>
  );
};

export default NavLinkComponent;

const CustomNavLink: React.FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => {
  return (
    <Button size="large" className="border-none shadow-none bg-transparent transition-none">
      <Link to={to}>
        <span className="font-medium">{children}</span>
      </Link>
    </Button>
  );
};
