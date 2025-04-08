import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderP2 = () => {
  const SelectOption = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div>
        <select
          id="dropdown"
          value={selectedValue}
          onChange={handleChange}
          className="w-[304px] h-[45px] text-[14px] rounded-[3px] m-[5px] outline-none text-[#5f5f5f] text-right pr-[40px] appearance-none bg-[url('svg/icons8-menu-24.png')] bg-no-repeat bg-[length:6%] bg-[position:calc(100%-10px)_center]"
        >
          <option value="" disabled style={{ color: "#555555" }}>
            همه ی دسته بندی ها
          </option>
          <option value="value1" style={{ color: "#555555" }}>
            فروش و بازاریابی
          </option>
          <option value="value2" style={{ color: "#555555" }}>
            وب و برنامه نویسی و نرم افزار
          </option>
          <option value="value3" style={{ color: "#555555" }}>
            مالی و حسابداری
          </option>
          <option value="value4" style={{ color: "#555555" }}>
            مسئول دفتر اداری تجاری
          </option>
          <option value="value5" style={{ color: "#555555" }}>
            تولید و مدیریت محتوا
          </option>
          <option value="value6" style={{ color: "#555555" }}>
            دیجیتال مارکتینگ
          </option>
        </select>
      </div>
    );
  };
  const SelectOptiontwo = () => {
    const [selectedValuetwo, setSelectedValuetwo] = useState("");

    const handleChangetwo = (event) => {
      setSelectedValuetwo(event.target.value);
    };

    return (
      <div>
        <select
          id="dropdown"
          value={selectedValuetwo}
          onChange={handleChangetwo}
          className="w-[304px] h-[45px] text-[14px]  rounded-[3px] m-[5px] text-right pr-[40px]  outline-none  text-[#5f5f5f] appearance-none bg-[url('/svg/icons8-location-24.png')] bg-no-repeat bg-[length:6%] bg-[position:calc(100%-10px)_center]"
        >
          <option value="" disabled style={{ color: "#555555" }}>
            همه ی استان ها
          </option>
          <option value="value2">البرز</option>
          <option value="value3">اصفهان</option>
          <option value="value4">شیراز</option>
          <option value="value5">لرستان</option>
          <option value="value6">خوزستان</option>
        </select>
      </div>
    );
  };

  return (
    <>
      <section className="h-[70%] border-[solid] border-[1px] border-[#2FB5CA] bg-[#2FB5CA] ">
        <div>
          <h1 className="text-center text-[23px] mt-[20px] text-[#FFFFFF] font-bold">
            آگهی استخدام فعال در{" "}
            <NavLink>
              <span className="underline underline-offset-8 m-[5px] hover:text-[#006B99]">
                ۲۴,۳۰۰
              </span>
            </NavLink>
            شرکت ایرانی
          </h1>
          <h2 className="text-center text-[15px] mt-[12px] text-[#C0E9ED] font-bold">
            جابینجا: سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در
            ایران
          </h2>
        </div>

        <div className="m-auto mt-[30px] flex justify-center">
          <button className="w-[150px] h-[45px] bg-[#fcc662] text-[#222222] text-[14px]  rounded-[4px] m-[5px] font-bold hover:bg-[#FFD68A]">
            جستجو در مشاغل
          </button>

          <div className="flex">
            {SelectOption()}
            {SelectOptiontwo()}
          </div>

          <input
            className="w-[310px] h-[45px] rounded-[4px] m-[5px] text-right pr-[40px] outline-none p-[10px] bg-[url('svg/icons8-search-24.png')] bg-no-repeat bg-[length:6%] bg-[position:calc(100%-10px)_center]"
            type="text"
            placeholder="عنوان شغلی / مهارت /نام شرکت "
          />
        </div>
        <p className="text-center text-[#FFFFFF] text-[12px] p-[15px] font-bold ">
          <NavLink>مشاهده همه ی آگهی های استخدام</NavLink>
        </p>
      </section>
    </>
  );
};

export default HeaderP2;
