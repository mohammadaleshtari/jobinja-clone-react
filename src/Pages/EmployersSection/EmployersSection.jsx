import React from "react";
import "./EmployersSection.css"; // فایل CSS برای استایل‌ها

const EmployersSection = () => {
  const employers = [
    { id: 1, name: "شرکت الف" },
    { id: 2, name: "شرکت ب" },
    { id: 3, name: "شرکت ج" },
  ];

  return (
    <div className="employers-section">
      <h1>بخش کارفرمایان</h1>
      <p>در این بخش می‌توانید اطلاعات کارفرمایان را مشاهده کنید.</p>

      <h2>لیست کارفرمایان</h2>
      <ul className="employers-list">
        {employers.map((employer) => (
          <li key={employer.id} className="employer-item">
            {employer.name}
          </li>
        ))}
      </ul>

      <h2>ثبت کارفرما</h2>
      <form className="employer-form">
        <label htmlFor="employerName">نام کارفرما:</label>
        <input
          type="text"
          id="employerName"
          placeholder="نام کارفرما را وارد کنید"
          className="employer-input"
        />
        <button type="submit" className="submit-button">
          ثبت
        </button>
      </form>
    </div>
  );
};

export default EmployersSection;
