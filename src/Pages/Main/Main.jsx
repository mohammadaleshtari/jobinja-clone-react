import Slider2 from "../Main/Slider2/Slider2";

import Slider from "../Main/Slider/Slider";
import LatestJobs from "./LatestJobs/LatestJobs";
import Start from "./Start/Start";
import JobList from "./JobList/JobList";
import Blog from "./Blog/Blog";
import Login from "./Login/Login";
import React, { useState } from "react";
import Mainapi from "../../services/api/Mainapi";
export let MainContext = React.createContext({
  data: null,
});
const Main = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleapi = (a, b, c) => {
    setData(a);
    setLoading(b);
    setError(c);
  };

  return (
    <>
      <main className="font-custom">
        <MainContext.Provider value={{ data, loading, error }}>
          <Mainapi fetchdata={handleapi} />
          <Slider />
          <Login />
          <LatestJobs />
          <Start />
          <Slider2 />
          <JobList />
          <Blog />
        </MainContext.Provider>
      </main>
    </>
  );
};

export default Main;
