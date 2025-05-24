import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#444444] h-[385px] mt-[30px] font-custom">
        <div className="w-[90%] flex justify-center m-auto">
          <div className="w-[22%] m-[35px]">
            <h2 className=" text-[#999999] text-right text-[15px]">
              جابینجا در شبکه های اجتماعی
            </h2>
            <hr className="mb-[20px] mt-[10px] border-[#686868]" />
            <div className="flex text-[25px] justify-center">
              <NavLink  to={"https://twitter.com"} ><img src="assets/svg/twitter.svg" className="h-[50px] w-[50px] m-[8px]"/></NavLink>
              <NavLink to={"https://t.me"} ><img src="assets/svg/telegram.svg" className="h-[50px] w-[50px] m-[8px]"/></NavLink>
              <NavLink to={"https://www.instagram.com"}><img src="assets/svg/instagram.svg" className="h-[50px] w-[50px] m-[8px]"/></NavLink>
              <NavLink  to={"https://www.linkedin.com"}><img src="assets/svg/linkdin.svg" className="h-[50px] w-[50px] m-[8px]"/></NavLink>
            </div>
            <h2 className="text-[#999999] font-bold text-right text-[18px] mt-[10px]">
              jobinja
            </h2>
            <p className="text-[#999999] text-right text-[13px]">
              با معتبرترین شرکت‌های کشور آشنا شوید و محل کار آینده خود را
              هوشمندانه انتخاب کنید.
            </p>
          </div>
          <div className="w-[22%] text-[#ffffffe7] m-[35px]">
            <h2 className=" text-[#999999] text-right text-[15px]">جابینجا </h2>
            <hr className="mb-[20px] mt-[10px] border-[#686868]" />
            <ul className="text-right text-[14px] leading-[30px]">
              <li className=" hover:text-[#F9A60B]"><NavLink>تماس با جابینجا</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>جابینجا در رسانه ها </NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>راهنمای استفاده برای کارجویان</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>وبلاگ</NavLink></li>
            </ul>
          </div>
          <div className="w-[22%] text-[#ffffffe7] m-[35px]">
            <h2 className=" text-[#999999] text-right text-[15px]">کارجویان</h2>
            <hr className="mb-[20px] mt-[10px] border-[#686868]" />
            <ul className="text-right text-[14px] leading-[30px]">
              <li className=" hover:text-[#F9A60B]"><NavLink>سوالات متداول کارفرمایان</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>قوانین و مقررات کارفرمایان</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>درج آگهی استخدام</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>ورود به بخش کارفرمایان</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>تعرفه ی انتشار آگهی</NavLink></li>
              <li className=" hover:text-[#F9A60B]"> <NavLink>سوالات متداول</NavLink></li>
            </ul>
          </div>
          <div className="w-[22%] text-[#ffffffe7] m-[35px]">
            <h2 className=" text-[#999999] text-right text-[15px]">
              کارفرمایان{" "}
            </h2>
            <hr className="mb-[20px] mt-[10px] border-[#686868]" />
            <ul className="text-right text-[14px] leading-[30px]">
              <li className=" hover:text-[#F9A60B]"><NavLink>سوالات متداول کارجویان</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>قوانین و مقررات کارجویان</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>لیست مشاغل</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>آگهی های استخدام</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>ورود/ثبت نام کارجو</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>ایمیل های اطلاع رسانی </NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>رزومه ساز انلاین</NavLink></li>
              <li className=" hover:text-[#F9A60B]"><NavLink>آشنایی با شرکت ها </NavLink></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[#999999] text-[12px]">
          © ۱۴۰۳ - تمامی حقوق برای جابینجا محفوظ است.
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
