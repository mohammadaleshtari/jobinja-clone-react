const Login = () => {
  return (
    <>
      <div className="w-[80%] m-[auto] bg-[#F9F9F9] h-[70px] rounded-[15px] p-[20px] flex mt-[20px]">
        <button className="w-[125px] h-[30px] bg-[#F9F9F9] border-[solid] border-[1px] border-[#1ABC9C] text-[#1ABC9C] rounded-[3px] mr-[3px] text-[14px]">
          ورود کارجو
        </button>
        <button className="rounded-[3px] w-[125px] h-[30px] bg-[#1ABC9C] text-[#F9F9F9] text-[14px]">
          {" "}
          ثبت نام کارجو
        </button>
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
