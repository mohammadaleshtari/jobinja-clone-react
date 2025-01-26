import { useContext } from "react";
import { MainContext } from "../Main";

const Blog = () => {
  let { data, loading, error } = useContext(MainContext);
  return (
    <section className="w-[85%] h-[100vh]  m-auto mt-[50px]">
      <div className="flex justify-around">
        <p className="w-[50%]">
          <a href="#">مشاهده همه</a>
        </p>
        <p className="w-[50%] text-right">از وبلاگ جابینجا</p>
      </div>
      <hr className="mt-[10px] mb-[20px]" />

      <div className="w-[100%]  flex text-right justify-center">
        {data?.card2?.map((item) => {
          return (
            <div
              className="w-[32%] mt-[10px] p-[20px] border-[1px] border-[solid] border-[#E5E7EB] rounded-[5px]"
              key={item.id}
            >
              <div>
                <img src={item.image} className="rounded-[5px]" />
              </div>
              <div>
                <h2 className="text-[18px] text-[#555555] mt-[12px]">
                  {item.text1}
                </h2>
                <p className="text-[14px] text-[#A5A5A5]  mt-[10px]">
                {item.text2}
                </p>
                <a href={item.link}>{item.text3}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
