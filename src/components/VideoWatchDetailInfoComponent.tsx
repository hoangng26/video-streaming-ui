import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import React from 'react';

const VideoWatchDetailInfoComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-5 mt-8 gap-20">
      <div className="col-span-3 grid gap-2">
        <h1 className="text-xl font-semibold mb-1">Trailer Final: T1 vs Weibo Gaming</h1>
        <h2>League of Legends Worlds Championship 2023</h2>
        <div>
          <span className="text-red-500 font-black">HOT</span>
          <Divider type="vertical" orientation="left" className="border-[1.5px] border-neutral-300 rounded-xl" />
          <span>2023</span>
          <Divider type="vertical" orientation="left" className="border-[1.5px] border-neutral-300 rounded-xl" />
          <span>T13</span>
          <Divider type="vertical" orientation="left" className="border-[1.5px] border-neutral-300 rounded-xl" />
          <span>1/1 episode</span>
          <Divider type="vertical" orientation="left" className="border-[1.5px] border-neutral-300 rounded-xl" />
          <span>English</span>
        </div>
        <p>eSports, Game</p>
        <div className="text-justify text-sm">
          <p>#Worlds2023</p>
          <p>
            Không có vinh quang nào mà không có sự nỗ lực. Hãy theo dõi cuộc tranh tài của các đội tuyển nhằm giành lấy
            vinh quang cao nhất tại #Worlds2023 trên trang{' '}
            <a href="https://lolesports.com" rel="noopener noreferrer" target="_blank">
              https://lolesports.com
            </a>
            , bắt đầu từ ngày 10/10.Hãy theo dõi các kênh mạng xã hội của LoL Esports để được cập nhật về những giải đấu
            LMHT hay nhất trên toàn thế giới:
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
          </p>
        </div>
      </div>

      <div className="col-span-2 pe-4">
        <div className="flex gap-4 justify-end">
          <Button className="border-none shadow-none bg-transparent" icon={<HeartOutlined />}>
            Favorite
          </Button>
          <Button className="border-none shadow-none bg-transparent" icon={<ShareAltOutlined />}>
            Share
          </Button>
        </div>

        <div className="grid gap-2">
          <p className="flex">
            <span className="w-1/4">Cast:</span>
            <span>Lee Sang-hyeok, Kang Seung-lok</span>
          </p>
          <p className="flex">
            <span className="w-1/4">Director:</span>
            <span>Riot Games</span>
          </p>
          <p className="flex">
            <span className="w-1/4">Genre:</span>
            <span>eSports, League of Legends</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoWatchDetailInfoComponent;
