// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PiSpinnerFill } from "react-icons/pi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { MainContext } from "../Main";

const Slider = () => {
  let { data, loading, error } = useContext(MainContext);
  return (
    <>
      <h2 className="flex text-center  w-[23%] bg-[#F9F9F9] m-auto p-[10px] text-[14px] text-[#555555] rounded-[20px]">
        .یک رزومه در جابینجا به شرکت سیناپ ارسال شد
        <PiSpinnerFill className="text-[#1ABC9C] mt-[4px] text-[15px]" />
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "85%", height: "35vh" }}
      >
        {data?.slider?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="p-[45px]  text-[12px]">
                <img src={item.image} className="mb-[10px]"/>
                <span className="text-[#777777] block">{item.text}</span>
                <span className="text-[#01B5E6]">{item.label}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
