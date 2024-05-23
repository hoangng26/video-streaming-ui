import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerCarouselComponent />
      <VideoCarouselComponent title="Latest Released">
        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/doraemon_landscape.jpg" alt="tear-of-steels_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/tear-of-steels_landscape.png" alt="tear-of-steels_landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/tinoaa-landscape.jpg" alt="tinoaa-landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/worlds-23_landscape.jpg" alt="worlds-23_landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Trending" slideToShow={5}>
        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/doraemon.jpg" alt="doraemon_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/doraemonvn.jpg" alt="doraemon_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/tear-of-steels.png" alt="tear-of-steels_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/tinoaa.jpg" alt="tinoaa_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/worlds-23.jpg" alt="worlds-23_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/doraemon.jpg" alt="doraemon_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/doraemonvn.jpg" alt="doraemon_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/tear-of-steels.png" alt="tear-of-steels_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/tinoaa.jpg" alt="tinoaa_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <div className="h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img className="h-full w-full object-cover" src="/worlds-23.jpg" alt="worlds-23_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Top 10 Drama" slideToShow={5}>
        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/doraemon_landscape.jpg" alt="tear-of-steels_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/tear-of-steels_landscape.png" alt="tear-of-steels_landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/tinoaa-landscape.jpg" alt="tinoaa-landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/worlds-23_landscape.jpg" alt="worlds-23_landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/doraemon_landscape.jpg" alt="tear-of-steels_alt" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/tear-of-steels_landscape.png" alt="tear-of-steels_landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/tinoaa-landscape.jpg" alt="tinoaa-landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none">
            <img src="/worlds-23_landscape.jpg" alt="worlds-23_landscape" />
          </div>
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>
      </VideoCarouselComponent>
    </>
  );
};

export default HomePage;
