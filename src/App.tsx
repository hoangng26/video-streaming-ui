import { HappyProvider } from '@ant-design/happy-work-theme';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Layout, theme, ThemeConfig } from 'antd';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    token: {
      colorPrimary: '#ff6500',
      fontFamily: 'Noto Sans',
      colorLink: '#000',
      colorLinkHover: '#ff6500',
      colorLinkActive: '#ff6500',
    },
    algorithm: theme.defaultAlgorithm,
  });

  const toggleDarkMode = () => {
    setThemeConfig((prevState) => ({
      ...prevState,
      algorithm: themeConfig.algorithm === theme.defaultAlgorithm ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }));
  };

  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <HappyProvider>
          <Layout
            className={`min-h-[200vh]${
              themeConfig.algorithm === theme.defaultAlgorithm ? ' bg-neutral-50 ' : ''
            } transition-all duration-500 ease-linear`}
          >
            <RouterProvider router={router} />
            <Button
              type="dashed"
              size="large"
              className="w-16 h-16 text-3xl fixed bottom-0 right-0 m-8"
              onClick={toggleDarkMode}
            >
              <span className="overflow-hidden translate-y-1 translate-x-0.5">
                <MoonOutlined
                  className={`transition-transform duration-500 ${
                    themeConfig.algorithm === theme.defaultAlgorithm ? 'scale-100' : 'scale-0'
                  }`}
                />
                <SunOutlined
                  className={`-translate-x-[calc(100%)] transition-transform duration-500 ${
                    themeConfig.algorithm === theme.darkAlgorithm ? 'scale-100' : 'scale-0'
                  }`}
                />
              </span>
            </Button>
          </Layout>
        </HappyProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
