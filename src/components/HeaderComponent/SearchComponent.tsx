import { landscapePoster } from '@/constants/TestVideoInfo';
import { getImgTitleKey } from '@/utils';
import { Image, List } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LinkWrapper from '../LinkWrapper';

const SearchComponent: React.FC = () => {
  const location = useLocation();
  const [prompt, setPrompt] = useState('');
  const [isShowResult, setIsShowResult] = useState(false);

  const handleOnChangeInputEvent: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPrompt(event.target.value);
  };

  useEffect(() => {
    const setShowResult = setTimeout(() => {
      setIsShowResult(Boolean(prompt));
    }, 500);

    return () => {
      clearTimeout(setShowResult);
    };
  }, [prompt]);

  useEffect(() => {
    setIsShowResult(false);
    setPrompt('');
  }, [location.pathname]);

  return (
    <div className="relative flex flex-row items-center group">
      <Search
        placeholder="Search..."
        allowClear
        enterButton
        size="large"
        value={prompt}
        onChange={handleOnChangeInputEvent}
      />
      <List
        className="absolute top-0 translate-y-12 z-50 w-[25vw] max-w-2xl bg-white border-transparent shadow-2xl"
        style={{
          display: isShowResult ? 'block' : 'none',
        }}
        itemLayout="horizontal"
        dataSource={landscapePoster}
        bordered
        renderItem={(item) => (
          <List.Item>
            <LinkWrapper to={item.href}>
              <List.Item.Meta
                className="[&>.ant-list-item-meta-avatar]:w-1/2"
                avatar={
                  <Image
                    className="rounded border"
                    preview={false}
                    src={item.srcImg}
                    alt={`${getImgTitleKey(item.title)}_alt`}
                  />
                }
                title={<span className="text-black line-clamp-2 font-semibold">{item.title}</span>}
                description={
                  <span className="line-clamp-3 text-neutral-400">
                    Không có vinh quang nào mà không có sự nỗ lực. Hãy theo dõi cuộc tranh tài của các đội tuyển nhằm
                    giành lấy vinh quang cao nhất tại #Worlds2023 trên trang{' '}
                    <a href="https://lolesports.com" rel="noopener noreferrer" target="_blank">
                      https://lolesports.com
                    </a>
                    , bắt đầu từ ngày 10/10.Hãy theo dõi các kênh mạng xã hội của LoL Esports để được cập nhật về những
                    giải đấu LMHT hay nhất trên toàn thế giới:
                    <br />
                    Twitter:{' '}
                    <a href="https://twitter.com/lolesports" rel="noopener noreferrer" target="_blank">
                      https://twitter.com/lolesports
                    </a>{' '}
                    <br />
                    Facebook:{' '}
                    <a href="https://www.facebook.com/lolesports" rel="noopener noreferrer" target="_blank">
                      https://www.facebook.com/lolesports
                    </a>{' '}
                    <br />
                    Instagram:{' '}
                    <a href="https://www.instagram.com/lolesports" rel="noopener noreferrer" target="_blank">
                      https://www.instagram.com/lolesports
                    </a>
                  </span>
                }
              />
            </LinkWrapper>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchComponent;
