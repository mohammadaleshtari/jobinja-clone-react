import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-[80%] m-[auto] bg-[#F9F9F9] h-[70px] rounded-[15px] p-[20px] flex mt-[20px]">
        <NavLink className="w-[125px] h-[30px] bg-[#F9F9F9] border-[solid] border-[1px] border-[#1ABC9C] text-[#1ABC9C] rounded-[3px] mr-[3px] text-[14px] flex justify-center items-center hover:text-[#1DD3AF]">
          ورود کارجو
        </NavLink>
        <NavLink className="w-[125px] h-[30px] bg-[#1EB89C] border-[solid] border-[1px] border-[#1ABC9C] text-[#F9F9F9] rounded-[3px] mr-[3px] text-[14px] flex justify-center items-center hover:bg-[#1DD3AF]">
          ثبت نام کارجو
        </NavLink>
        <p className="text-[#777777] text-[14px] mr-[40px] ml-[20px] mt-[5px]">
          کارفرما هستید؟
          <a href="#">ایجاد آگهی استخدام</a>
        </p>
        <p className="text-[#777777] text-[14px] mt-[5px]">
          همین حالا در جابینجا ثبت‌نام کن و رزومه‌ات رو برای استخدام در شرکت‌های
          معتبر بفرست
        </p>
      </div>
    </>
  );
};
export default Login;
