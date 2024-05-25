import { Spin, SpinProps } from 'antd';
import React from 'react';

const LoadingComponent: React.FC<SpinProps> = (props) => (
  <Spin tip="Loading..." size="large" {...props}>
    <div></div>
  </Spin>
);

export default LoadingComponent;
