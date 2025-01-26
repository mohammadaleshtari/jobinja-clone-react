import axios from "axios";
import { useEffect } from "react";

const Mainapi = ({ fetchdata }) => {
  const FetchMain = async () => {
    try {
      let res = await axios.get("http://localhost:3007/main");

      fetchdata(res.data, false, null);
    } catch (error) {
      fetchdata(false, error.message);
    }
  };
  useEffect(() => {
    FetchMain();
  }, []);
};

export default Mainapi;
