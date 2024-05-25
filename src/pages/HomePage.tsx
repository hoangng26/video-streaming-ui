import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import { Image } from 'antd';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerCarouselComponent />
      <VideoCarouselComponent title="Latest Released">
        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
            src="/doraemon_landscape.jpg"
            alt="tear-of-steels_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
            src="/tear-of-steels_landscape.png"
            alt="tear-of-steels_landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
            src="/tinoaa-landscape.jpg"
            alt="tinoaa-landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
            src="/worlds-23_landscape.jpg"
            alt="worlds-23_landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Trending" slideToShow={5}>
        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/doraemon.jpg"
            alt="doraemon_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/doraemonvn.jpg"
            alt="doraemon_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tear-of-steels.png"
            alt="tear-of-steels_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tinoaa.jpg"
            alt="tinoaa_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/worlds-23.jpg"
            alt="worlds-23_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/doraemon.jpg"
            alt="doraemon_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/doraemonvn.jpg"
            alt="doraemon_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tear-of-steels.png"
            alt="tear-of-steels_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tinoaa.jpg"
            alt="tinoaa_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <Image
            preview={false}
            className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/worlds-23.jpg"
            alt="worlds-23_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Top 10 Drama" slideToShow={5}>
        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/doraemon_landscape.jpg"
            alt="tear-of-steels_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tear-of-steels_landscape.png"
            alt="tear-of-steels_landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tinoaa-landscape.jpg"
            alt="tinoaa-landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/worlds-23_landscape.jpg"
            alt="worlds-23_landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/doraemon_landscape.jpg"
            alt="tear-of-steels_alt"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Doraemon the Movie: Nobita's Little Star Wars (2022)
          </p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tear-of-steels_landscape.png"
            alt="tear-of-steels_landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">Tear of Steel</p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/tinoaa-landscape.jpg"
            alt="tinoaa-landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">There's No One At All</p>
        </div>

        <div>
          <Image
            preview={false}
            className="rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
            src="/worlds-23_landscape.jpg"
            alt="worlds-23_landscape"
          />
          <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">
            Final: T1 vs Weibo Gaming
          </p>
        </div>
      </VideoCarouselComponent>
    </>
  );
};

export default HomePage;
