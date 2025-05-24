import "./App.css";
import Header from "../src/Pages/Header/Header";
import Main from "../src/Pages/Main/Main";
import Footer from "../src/Pages/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import EmployersSection from "../src/Pages/EmployersSection/EmployersSection";
import JabinjaJobs from "../src/Pages/JabinjaJobs/JobimjaJobs";
import ResumeMaker from "../src/Pages/ResumeMaker/ResumeMaker";
import TopCompanies from "../src/Pages/TopCompanies/TopCompanies";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HeaderP1 from "../src/Pages/Header/HeaderP1/HeaderP1";
import React, { useEffect, useState } from "react";
import axios from "axios";
export let Allcontext = React.createContext({
  data: null,
  loading: true,
  error: null,
});
const App = () => {
  const [Headerdata, setHeaderdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Maindata, setMaindata] = useState(null);

  const Myfetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get("../data/header.json");
      console.log(res);
      setHeaderdata(res.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setHeaderdata(null);
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false); // پس از پایان درخواست (موفق یا ناموفق)، وضعیت بارگذاری را تمام شده نشان دهید
    }
  };
  const MyfetchMain = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/data/main.json");
      console.log(res);
      setMaindata(res.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setMaindata(null);
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false); // پس از پایان درخواست (موفق یا ناموفق)، وضعیت بارگذاری را تمام شده نشان دهید
    }
  };

  useEffect(() => {
    Myfetch();
    MyfetchMain();
  }, []);
  const location = useLocation();
  return (
    <>
      <Allcontext.Provider value={{ Headerdata, loading, error, Maindata }}>
        {location.pathname === "/" ? <Header /> : <HeaderP1 />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EmployersSection" element={<EmployersSection />} />
          <Route path="/JabinjaJobs" element={<JabinjaJobs />} />
          <Route path="/ResumeMaker" element={<ResumeMaker />} />
          <Route path="/TopCompanies" element={<TopCompanies />} />
        </Routes>
        <Footer />
      </Allcontext.Provider>
    </>
  );
};

export default App;
