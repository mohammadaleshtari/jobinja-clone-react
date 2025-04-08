import { useContext } from "react";
import { Allcontext } from "../../../../App/App";
import { NavLink } from "react-router-dom";

const JobList = () => {
  let { Maindata, loading, error } = useContext(Allcontext);
  return (
    <>
      <section className="w-[100%] h-[500px] bg-[#F9F9F9] mt-[25px] pl-[150px] pr-[150px]">
        <h1 className="font-bold text-center text-[#555555] text-[18px] p-[12px]">
          لیست مشاغل جابینجا
        </h1>
        <hr />

        <div className="flex justify-around text-end mt-[25px]">
          {Maindata?.list1?.map((item) => {
            return (
              <div key={item.id}>
                <ul className="leading-[30px]">
                  <li className="p-[8px]">
                    <NavLink href="#" className="font-bold text-[#555555]">
                      {item.label1}
                    </NavLink>
                  </li>
                  <li className="p-[8px]">
                    <NavLink href="#" className="text-[#8f8f8f] text-[15px]  hover:text-[#3f3f3f]">
                      {item.label2}
                    </NavLink>
                  </li>
                  <li className="p-[8px]">
                    <NavLink href="#" className="text-[#8f8f8f] text-[15px]  hover:text-[#3f3f3f]">
                      {item.label3}
                    </NavLink>
                  </li>
                  <li className="p-[8px]">
                    <NavLink href="#" className="text-[#8f8f8f] text-[15px]  hover:text-[#3f3f3f]">
                      {item.label4}
                    </NavLink>
                  </li>
                  <li className="p-[8px]">
                    <NavLink href="#" className="text-[#8f8f8f] text-[15px]  hover:text-[#3f3f3f]">
                      {item.label5}
                    </NavLink>
                  </li>
                  <li className="p-[8px]">
                    <NavLink href="#" className="text-[#8f8f8f] text-[15px]  hover:text-[#3f3f3f]">
                      {item.label6}
                    </NavLink>
                  </li>
                  <li className="p-[8px]">
                    <NavLink href="#" className="text-[#8f8f8f] text-[15px]  hover:text-[#3f3f3f]">
                      {item.label7}
                    </NavLink>
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
