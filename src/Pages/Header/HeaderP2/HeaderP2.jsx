import { useState } from "react";

const HeaderP2 = () => {
  const SelectOption = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div>
        <select id="dropdown" value={selectedValue} onChange={handleChange} className="w-[304px] h-[45px] text-[14px]  rounded-[4px] m-[5px] outline-none text-right">
          <option value="" disabled style={{color:"#555555"}}>
            همه ی دسته بندی ها
          </option>
          <option value="value1" style={{color:"#555555"}}>فروش و بازاریابی</option>
          <option value="value2" style={{color:"#555555"}}>وب و برنامه نویسی و نرم افزار</option>
          <option value="value3" style={{color:"#555555"}}>مالی و حسابداری</option>
          <option value="value4" style={{color:"#555555"}}>مسئول دفتر اداری تجاری</option>
          <option value="value5" style={{color:"#555555"}}>تولید و مدیریت محتوا</option>
          <option value="value6" style={{color:"#555555"}}>دیجیتال مارکتینگ</option>
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
        <select id="dropdown" value={selectedValuetwo} onChange={handleChangetwo} className="w-[304px] h-[45px] text-[14px]  rounded-[4px] m-[5px] outline-none text-right">
          <option value="" disabled  style={{color:"#555555"}}>
          همه ی استان ها
          </option>
          <option value="value1" style={{color:"#555555"}}>تهران</option>
          <option value="value2" style={{color:"#555555"}}>البرز</option>
          <option value="value3" style={{color:"#555555"}}>اصفهان</option>
          <option value="value4" style={{color:"#555555"}}>شیراز</option>
          <option value="value5" style={{color:"#555555"}}>لرستان</option>
          <option value="value6" style={{color:"#555555"}}>خوزستان</option>
        </select>
      </div>
    );
  };

  return (
    <>
      <section className="h-[70%] border-[solid] border-[1px] border-[#2FB5CA] bg-[#2FB5CA]">
        <div>
          <h1 className="text-center text-[23px] mt-[20px] text-[#FFFFFF] font-bold">
            <span className="underline">۲۴,۳۰۰</span>آگهی استخدام فعال در
            <span className="underline"> ۱۰,۵۴</span> شرکت ایرانی
          </h1>
          <h2 className="text-center text-[15px] mt-[12px] text-[#C0E9ED] font-bold">
            جابینجا: سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در
            ایران
          </h2>
        </div>

        <div className="m-auto mt-[30px] flex justify-center">
          <button className="w-[150px] h-[45px] bg-[#fcc662] text-[#222222] text-[14px]  rounded-[4px] m-[5px] font-bold">
            جستجو در مشاغل
          </button>

          <div className="flex">
            {SelectOption()}
            {SelectOptiontwo()}
          </div>

          <input
            className="w-[310px] h-[45px] rounded-[4px] m-[5px] text-[14px] text-right outline-none p-[10px]"
            type="text"
            placeholder="عنوان شغلی / مهارت /نام شرکت "
          />
        </div>
        <p className="text-center text-[#FFFFFF] text-[12px] p-[15px] font-bold">
          <a href="href">مشاهده همه ی آگهی های استخدام</a>
        </p>
      </section>
    </>
  );
};

export default HeaderP2;
