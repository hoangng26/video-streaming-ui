import { Divider } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React from 'react';

const FooterComponent: React.FC = () => {
  return (
    <>
      <Divider className="border" />
      <Footer className="text-center bg-sky-300 rounded-md text-black">
        <span className="font-semibold text-base">
          Video Streaming Platform ©{new Date().getFullYear()} Created by hoangng26 with ❤️
        </span>
      </Footer>
    </>
  );
};

export default FooterComponent;
