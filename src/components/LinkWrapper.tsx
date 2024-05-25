import React, { PropsWithChildren } from 'react';
import { LinkProps, useNavigate } from 'react-router-dom';

const LinkWrapper: React.FC<PropsWithChildren<LinkProps>> = ({ children, to }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(to);
  };

  return (
    <div className="cursor-pointer" onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default LinkWrapper;
