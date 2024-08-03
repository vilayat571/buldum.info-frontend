import Logo from "../../atoms/Navbar/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="flex justify-center w-full bg-[#000]">
      <div
        className=" tracking-wider text-lg
  flex justify-between items-center 
  h-auto w-full
    px-20 py-4"
      >
        <Logo />

        <div className="w-full flex justify-center relative -left-4">
          <button className="bg-[#ff0000] px-4 py-2 mr-5 rounded-sm text-white tracking-wider">
            <FontAwesomeIcon icon={faFilter} />
            <span className="ml-2">Filtir</span>
          </button>
          <input
            type="text"
            className="px-6 py-4 w-3/5 rounded-sm text-sm outline-none placeholder:text-black"
            id="key"
            placeholder="Açar söz daxil edin"
          />
        </div>

        <div>
          <button className="bg-[#ff0000] px-4 py-3 rounded-sm text-white tracking-wider">
            Paylaş
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
