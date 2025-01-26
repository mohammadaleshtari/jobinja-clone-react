import { MdPerson } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FcDataSheet } from "react-icons/fc";
import { TbLogin } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HeaderP1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Myfetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3007/header");
      console.log(res);
      setData(res.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setData(null);
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false); // پس از پایان درخواست (موفق یا ناموفق)، وضعیت بارگذاری را تمام شده نشان دهید
    }
  };

  useEffect(() => {
    Myfetch();
  }, []);
  return (
    <section className="h-[23%]  flex justify-end bg-[#444444]">
      <div className="flex w-[37%] justify-center">
        <div></div>
        <h1 className="text-[23px]  font-bold ] p-[20px] text-[#A5A5A5]  border-r border-l border-[#535353] ml-[50px] shadow-sm shadow-[#2b2b2b] h-[69px]">
          jobinja
        </h1>
        <div className="flex items-center mr-[100px] leading-3">
          <h1 className="text-[#DEDEDE] text-[12px] flex justify-center ml-[15px] font-bold">
            ورود کارجو
            <TbLogin className="ml-[4px] text-[15px]" />
          </h1>
          <h1 className="text-[#DEDEDE] ml-[20px] text-[12px] flex font-bold">
            ثبت نام کارجو
            <MdPerson className="ml-[4px] text-[14px]" />
          </h1>
          <MdOutlineNotificationsNone className="text-[#777777] text-[25px] ml-[15px]" />
        </div>
      </div>
      <ul className="w-[60%] flex p-[25px] mr-[10px] items-center text-[12px] justify-center font-bold">
        {data?.menu?.map((item) => {
          return (
            <li
              className=" hover:bg-[#505050] border border-[#575757]  shadow-sm shadow-[#1b1b1b]"
              key={item.id}
            >
              <NavLink
                to={item.link}
                className=" text-[#F6F6F6] flex p-[25px] "
              >
                {item.label}
                <FcDataSheet className="text-[17px] ml-[7px]" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HeaderP1;
