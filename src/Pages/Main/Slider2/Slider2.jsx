// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider2.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { MainContext } from "../Main";
const Slider2 = () => {
  let { data, loading, error } = useContext(MainContext);
  return (
    <>
      <div className="flex mt-[50px]">
        <p className="w-[40%] text-left ml-[135px] text-[#3AB0E4] text-[14px]">
          مشاهده همه
        </p>
        <p className="w-[40%] text-right font-bold text-[#555555]">
          آشنایی با شرکت ها
        </p>
      </div>
      <hr className="w-[80%] m-auto mt-[20px] mb-[20px]" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "80%", height: "90vh" }}
      >
        {data?.slider2?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="border-[1px] border-[#EEEEEE] border-[solid] mb-[20px] p-[15px]  text-right">
                <div className="mt-[25px]">
                  <h2 className="text-[14px] font-bold text-[#555555]">
                    {item.text1}
                  </h2>
                  <p className="text-[12px] text-[#A5A5A5] mt-[5px] mb-[15px]">
                    {item.text2}
                  </p>
                </div>
                <div>
                  <img src={item.image} />
                </div>
                <p className="text-[13px] text-[#A5A5A5] p-[17px]">
                  {item.text3}
                </p>
                <hr className="pb-[10px]" />
                <div className="text-[#555555]">
                  <div className="flex justify-end text-[13px] mb-[6px]">
                    <p>{item.text4} </p>
                    <div>8</div>
                  </div>
                  <div className="flex justify-end text-[13px] mb-[6px]">
                    <p>{item.text5}</p>
                    <div>6</div>
                  </div>
                  <div className="flex justify-end text-[13px] mb-[8px]">
                    <p>{item.text6}</p>
                    <div>9</div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p className="text-[13px]">22شغل فعال</p>
                  <p className="text-[13px]"> صفحه شرکت</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slider2;
