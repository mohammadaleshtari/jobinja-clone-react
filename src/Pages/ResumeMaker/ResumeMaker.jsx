import React from "react";


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
      <div className="p-4 shadow-lg mb-4">
        <div>
          <h2 className="text-lg font-semibold">۳. مهارت‌ها</h2>
          <p className="text-gray-600">افزودن مهارت‌های فنی و نرم</p>
        </div>
      </div>
      <div className="p-4 shadow-lg mb-4">
        <div>
          <h2 className="text-lg font-semibold">۴. تحصیلات</h2>
          <p className="text-gray-600">وارد کردن مدارک تحصیلی و دوره‌های آموزشی</p>
        </div>
      </div>
      <div className="p-4 shadow-lg mb-4">
        <div>
          <h2 className="text-lg font-semibold">۵. پروژه‌ها و نمونه کارها</h2>
          <p className="text-gray-600">نمایش پروژه‌های انجام‌شده و دستاوردهای حرفه‌ای</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeMaker;
