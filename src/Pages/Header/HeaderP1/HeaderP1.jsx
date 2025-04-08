import { MdPerson } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FcDataSheet } from "react-icons/fc";
import { TbLogin } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Allcontext } from "../../../../App/App";

const HeaderP1 = () => {
  let { Headerdata, loading, error } = useContext(Allcontext);
  return (
    <section className="  flex justify-end bg-[#444444]  w-[100%] h-[12vh] font-custom">
      <div className="flex w-[37%] justify-center">
        <div></div>
        <h1 className="text-[23px]  font-bold ] p-[20px] text-[#e7e6e6]  border-r border-l border-[#535353] ml-[50px] shadow-sm shadow-[#2b2b2b] h-[69px] hover:text-[#FFFFFF]">
          <NavLink>jobinja</NavLink>
        </h1>
        <div className="flex items-center mr-[100px] leading-3">
          <h1 className="text-[#DEDEDE] text-[12px] flex justify-center ml-[15px] font-bold hover:text-[#FFFFFF]">
            <NavLink>ورود کارجو</NavLink>
            <TbLogin className="ml-[4px] text-[15px] hover:text-[#FFFFFF]" />
          </h1>
          <h1 className="text-[#DEDEDE] ml-[20px] text-[12px] flex font-bold hover:text-[#FFFFFF]">
            <NavLink>ثبت نام کارجو</NavLink>
            <MdPerson className="ml-[4px] text-[14px] hover:text-[#FFFFFF]" />
          </h1>
          <MdOutlineNotificationsNone className="text-[#777777] text-[25px] ml-[15px]" />
        </div>
      </div>
      <ul className="w-[60%] flex p-[25px] mr-[10px] items-center text-[12px] justify-center font-bold">
        {Headerdata?.menu?.map((item) => {
          return (
            <li
              className=" hover:bg-[#505050] border border-[#575757]  shadow-sm shadow-[#1b1b1b]"
              key={item.id}
            >
              <NavLink to={item.link} className=" flex p-[20px]">
                <p className="text-[13px] text-[#F6F6F6]">{item.label}</p>
                <img
                  src={item.icon}
                  className="h-[16px] w-[17px]  ml-[4px] mt-[4px]"
                ></img>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HeaderP1;
