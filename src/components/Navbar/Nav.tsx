import { Link } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";

const Nav = () => {
  return (
    <div className="w-full tracking-wider text-lg flex justify-between items-center h-auto px-20 py-4 bg-[#000] text-white">
      <Logo />

      <div className="gap-4 flex">
        <Link className="white" to="/">
          elanlar
        </Link>
        <Link className="white" to="/">
          biz kimik?
        </Link>
      </div>

      <div>
        <button className="bg-[#ff0000] px-6 py-2 rounded-sm tracking-wider text-white">
          paylaş
        </button>
      </div>

    </div>
  );
};

export default Nav;
