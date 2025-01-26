import "./App.css";
import Header from "../src/Pages/Header/Header";
import Main from "../src/Pages/Main/Main";
import Footer from "../src/Pages/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import EmployersSection from "../src/Pages/EmployersSection/EmployersSection";
import JabinjaJobs from "../src/Pages/JabinjaJobs/JobimjaJobs";
import ResumeMaker from "../src/Pages/ResumeMaker/ResumeMaker";
import TopCompanies from "../src/Pages/TopCompanies/TopCompanies";
import {Route, Routes } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import HeaderP1 from "../src/Pages/Header/HeaderP1/HeaderP1";

const App = () => {
  const location = useLocation()
  return (
    <>
      
      {location.pathname === "/"? <Header/> :<HeaderP1/>} 

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EmployersSection" element={<EmployersSection />} />
          <Route path="/JabinjaJobs" element={<JabinjaJobs />} />
          <Route path="/ResumeMaker" element={<ResumeMaker />} />
          <Route path="/TopCompanies" element={<TopCompanies />} />
        </Routes>
        <Footer />
     
    </>
  );
};

export default App;
