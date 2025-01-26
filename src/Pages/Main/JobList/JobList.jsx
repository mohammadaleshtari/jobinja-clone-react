import { useContext } from "react";
import { MainContext } from "../Main";

const JobList = () => {
  let { data, loading, error } = useContext(MainContext);
  return (
    <>
      <section className="w-[100%] h-[500px] bg-[#F9F9F9] mt-[25px] pl-[150px] pr-[150px]">
        <h1 className="font-bold text-center text-[#555555] text-[18px] p-[12px]">
          لیست مشاغل جابینجا
        </h1>
        <hr />

        <div className="flex justify-around text-end mt-[25px]">
          {data?.list1?.map((item) => {
            return (
              <div key={item.id}>
                <ul className="leading-[30px]">
                  <li className="p-[8px]">
                    <a href="#" className="font-bold text-[#555555]">
                      {item.label1}
                    </a>
                  </li>
                  <li className="p-[8px]">
                    <a href="#" className="text-[#8f8f8f] text-[15px]">
                      {item.label2}
                    </a>
                  </li>
                  <li className="p-[8px]">
                    <a href="#" className="text-[#8f8f8f] text-[15px]">
                      {item.label3}
                    </a>
                  </li>
                  <li className="p-[8px]">
                    <a href="#" className="text-[#8f8f8f] text-[15px]">
                      {item.label4}
                    </a>
                  </li>
                  <li className="p-[8px]">
                    <a href="#" className="text-[#8f8f8f] text-[15px]">
                      {item.label5}
                    </a>
                  </li>
                  <li className="p-[8px]">
                    <a href="#" className="text-[#8f8f8f] text-[15px]">
                      {item.label6}
                    </a>
                  </li>
                  <li className="p-[8px]">
                    <a href="#" className="text-[#8f8f8f] text-[15px]">
                      {item.label7}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default JobList;
