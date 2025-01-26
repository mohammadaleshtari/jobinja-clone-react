import React, { useEffect, useState } from "react";
import HeaderP1 from "./HeaderP1/HeaderP1";
import HeaderP2 from "./HeaderP2/HeaderP2";
import axios from "axios";
export let MyContext = React.createContext({
  data: null,
});

const Header = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Myfetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3007/header");
      console.log(res);
      setData(res.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setData(null);
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false); // پس از پایان درخواست (موفق یا ناموفق)، وضعیت بارگذاری را تمام شده نشان دهید
    }
  };

  useEffect(() => {
    Myfetch();
  }, []);

  return (
    <MyContext.Provider value={{ data, loading, error }}>
      <header className="w-[100%] h-[50vh] font-custom">
        <HeaderP1 />
        <HeaderP2 />
      </header>
    </MyContext.Provider>
  );
};

export default Header;
