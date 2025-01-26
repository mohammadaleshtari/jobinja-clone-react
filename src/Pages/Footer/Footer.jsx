import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
              <FaTwitterSquare className="m-[15px] text-[#53ADEE]  bg-[white] rounded-[35px] text-[35px]" />
              <FaTelegram className="m-[15px] text-[#29A0D5] bg-[white] rounded-[35px] text-[35px]" />
              <FaInstagram className="m-[15px] text-[#BE3694]  bg-[white] rounded-[35px] text-[35px]" />
              <FaLinkedin className="m-[15px] text-[#017ABA]  bg-[white] rounded-[35px] text-[35px]" />
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
              <li> تماس با جابینجا</li>
              <li>جابینجا در رسانه‌ها</li>
              <li>راهنمای استفاده برای کارجویان</li>
              <li>وبلاگ</li>
            </ul>
          </div>
          <div className="w-[22%] text-[#ffffffe7] m-[35px]">
            <h2 className=" text-[#999999] text-right text-[15px]">کارجویان</h2>
            <hr className="mb-[20px] mt-[10px] border-[#686868]" />
            <ul className="text-right text-[14px] leading-[30px]">
              <li>سوالات متداول کارفرمایان</li>
              <li>قوانین و مقررات کارفرمایان</li>
              <li>درج آگهی استخدام</li>
              <li>ورود به بخش کارفرمایان</li>
              <li>تعرفه‌ی انتشار آگهی</li>
              <li>سؤالات متداول</li>
            </ul>
          </div>
          <div className="w-[22%] text-[#ffffffe7] m-[35px]">
            <h2 className=" text-[#999999] text-right text-[15px]">
              کارفرمایان{" "}
            </h2>
            <hr className="mb-[20px] mt-[10px] border-[#686868]" />
            <ul className="text-right text-[14px] leading-[30px]">
              <li>سوالات متداول کارجویان</li>
              <li>قوانین و مقررات کارجویان</li>
              <li>لیست مشاغل</li>
              <li>آگهی های استخدام</li>
              <li>ورود/ثبت نام کارجو</li>
              <li>ایمیل های اطلاع رسانی</li>
              <li>رزومه ساز انلاین</li>
              <li>آشنایی با شرکت ها</li>
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
