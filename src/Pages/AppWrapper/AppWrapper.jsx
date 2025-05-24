import { HashRouter } from "react-router-dom";
import App from "../../../App/App";

const AppWrapper = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

export default AppWrapper;

