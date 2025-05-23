import { useContext } from "react";
import { Allcontext } from "../../../../App/App";
import { NavLink } from "react-router-dom";

const LatestJobs = () => {
  let { Maindata, loading, error } = useContext(Allcontext);
  return (
    <>
      <section>
        <div className="flex">
          <p className="ml-[150px] mt-[30px] w-[50%] text-[13px] text-[#3AB0E4]">
            مشاهده همه (13654)
          </p>
          <p className="mt-[30px] w-[27%] text-right text-[14] font-bold text-[#555555]">
            آخرین آگهی ها
          </p>
        </div>
        <hr className="w-[80%] m-auto mt-[10px]" />
        <div className="w-[80%] h-[80vh] flex flex-wrap justify-around m-auto mt-[20px]">
          {Maindata?.card?.map((item) => {
            return (
              <div
                className="w-[30%] h-[200px] border-[solid] border-[1px] mt-[40px]  border-[#EEEEEE] flex rounded-[5px]"
                key={item.id}
              >
                <div className="mt-[18px] ml-[30px] leading-[25px] ">
                  <h2 className="text-[#3AB0E4] font-bold text-right text-[14px] mb-[15px] hover:text-[#1988B8]">
                     <NavLink>{item.textbase}</NavLink>
                  </h2>
                  <p className="text-[#777777] text-[12px] text-right">
                    <NavLink>{item.textsmall1}</NavLink>
                  </p>
                  <p className="text-[#777777] text-[12px] text-right">
                    <NavLink>{item.textsmall2}</NavLink>
                  </p>
                  <p className="text-[#777777] text-[12px] text-right">
                    <NavLink>{item.textsmall3}</NavLink>
                  </p>
                  <p className="text-[#777777] text-[12px] text-left mt-[30px]">
                    <NavLink>{item.textsmall4}</NavLink>
                  </p>
                </div>
                <div className="w-[100px] h-[100px] ml-[10px]">
                  <img src={item.image} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default LatestJobs;
