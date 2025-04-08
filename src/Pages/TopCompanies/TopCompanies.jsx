import React from "react";


const topCompanies = [
  { id: 1, name: "گوگل", location: "آمریکا", industry: "فناوری اطلاعات" },
  { id: 2, name: "مایکروسافت", location: "آمریکا", industry: "نرم‌افزار و سخت‌افزار" },
  { id: 3, name: "آمازون", location: "آمریکا", industry: "تجارت الکترونیک" },
  { id: 4, name: "سامسونگ", location: "کره جنوبی", industry: "الکترونیک مصرفی" },
  { id: 5, name: "اپل", location: "آمریکا", industry: "فناوری و سخت‌افزار" }
];

const ResumeMaker = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ویژگی‌های ساخت رزومه</h1>
      <div className="p-4 shadow-lg mb-4">
        <div>
          <h2 className="text-lg font-semibold">۱. اطلاعات شخصی</h2>
          <p className="text-gray-600">وارد کردن نام، ایمیل، شماره تماس و آدرس</p>
        </div>
      </div>
      <div className="p-4 shadow-lg mb-4">
        <div>
          <h2 className="text-lg font-semibold">۲. تجربیات کاری</h2>
          <p className="text-gray-600">ثبت سوابق شغلی و مسئولیت‌های قبلی</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-6 mb-4">شرکت‌های برتر</h2>
      {topCompanies.map((company) => (
        <div key={company.id} className="p-4 shadow-lg mb-4">
          <div>
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <p className="text-gray-600">{company.location} - {company.industry}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeMaker;
