// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PiSpinnerFill } from "react-icons/pi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useContext } from "react";
import { Allcontext } from "../../../../App/App";
import { NavLink } from "react-router-dom";

const Slider = () => {
  let { Maindata, loading, error } = useContext(Allcontext);
  return (
    <>
      <h2 className="flex text-center  w-[23%] bg-[#F9F9F9] m-auto p-[10px] text-[14px] text-[#555555] rounded-[20px]">
        <NavLink className="hover:text-[#1988B8]">.یک رزومه در جابینجا به شرکت سیناپ ارسال شد</NavLink>
        <PiSpinnerFill className="text-[#1ABC9C] mt-[4px] text-[15px]" />
      </h2>
      <Swiper
             slidesPerView={1}
             spaceBetween={10}
             loop={true}
             autoplay={{ delay: 3000, disableOnInteraction: false }}
             speed={800}
             pagination={{ clickable: true }}
             navigation={true}
             breakpoints={{
               640: { slidesPerView: 2, spaceBetween: 20 },
               768: { slidesPerView: 4, spaceBetween: 40 },
               1024: { slidesPerView: 6, spaceBetween: 20 },
             }}
             modules={[Autoplay, Navigation, Pagination]}
             
      >
        {Maindata?.slider?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <NavLink>
              <div className="p-[45px]  text-[12px] group">
                <img src={item.image} className="mb-[10px]"/>
                <span className="text-[#777777] block">{item.text}</span>
                <span className="text-[#01B5E6] group-hover:text-[#13668ae0]">{item.label}</span>
              </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
