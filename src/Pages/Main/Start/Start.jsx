import { useContext } from "react";
import { MainContext } from "../Main";


const Start = () => {
  let{data,loading,error}=useContext(MainContext)
  return (
    <>
      <section className="bg-[#F9F9F9] w-[80%] h-[60vh] m-auto mt[20px] rounded-[5px]">
        <h2 className="text-center  text-[18px] p-[15px] text-[#555555]">
          از کجا شروع کنم؟
        </h2>
        <hr className="w-[80%] m-auto" />
        <div className="flex justify-center">
          {data?.start?.map((item) => {
            return (
              <div className="w-[22%]  m-[8px]" key={item.id}>
                <div className="flex justify-end mb-[25px]">
                  <img src={item.image} />
                </div>
                <h2 className="text-right font-bold text-[#777777] text-[15px] mb-[10px]">
                  {item.textbase}
                </h2>
                <p className="text-right text-[#A5A5A5] text-[14px] mb-[30px]">
                  {item.textsmall1}
                </p>
                <a href="#" className="text-[13px] text-[#3AB0E4] font-bold">
                  {item.textsmall2}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Start;
