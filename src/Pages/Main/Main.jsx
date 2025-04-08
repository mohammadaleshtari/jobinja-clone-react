import Slider2 from "../Main/Slider2/Slider2";
import Slider from "../Main/Slider/Slider";
import LatestJobs from "./LatestJobs/LatestJobs";
import Start from "./Start/Start";
import JobList from "./JobList/JobList";
import Blog from "./Blog/Blog";
import Login from "./Login/Login";

const Main = () => {
  return (
    <>
      <main className="font-custom">
        <Slider />
        <Login />
        <LatestJobs />
        <Start />
        <Slider2 />
        <JobList />
        <Blog />
      </main>
    </>
  );
};

export default Main;
