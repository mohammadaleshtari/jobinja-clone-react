import HeaderP1 from "./HeaderP1/HeaderP1";
import HeaderP2 from "./HeaderP2/HeaderP2";

const Header = () => {
  return (
    <header className="w-[100%] h-[50vh] font-custom">
      <HeaderP1 />
      <HeaderP2 />
    </header>
  );
};

export default Header;
