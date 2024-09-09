import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Howworks from "../Main/Howworks";
import { changeNav } from "../../redux/reducers/updateNav";
import { useAppDispatch } from "../../redux/store";

const Nav: React.FC<{ widthOfLayout: string }> = ({ widthOfLayout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(false);

  const dispatch=useAppDispatch()

  return (
    <div className={`flex flex-col sm:px-4  ${widthOfLayout} items-center`}>
      <Howworks play={play} setPlay={setPlay} />
      <div
        className="  pt-4 py-4 text-sm w-full
        xl:flex lg:flex md:hidden sm:hidden
      
      justify-between  items-center "
      >
        <p>E-poçt adresi: info@buldum.info</p>
        <div className="flex gap-2 items-center">
          <Link
            to="/elantap"
            className="text-sm rounded border-[#b8b8b8] border-[1.5px] px-4 py-3 "
          >
            Elan tap
          </Link>
          |
          <button
            onClick={() => setPlay(true)}
            className="text-sm rounded border-[#b8b8b8] cursor-pointer flex items-center border-[1.5px] px-4 py-3 "
          >
            <span className="cursor-pointer"> Necə çalışır</span>{" "}
            <FontAwesomeIcon className="text-base px-1" icon={faPlayCircle} />
          </button>
        </div>
      </div>
      <div
        className="w-full
        sm:bg-white xl:bg-transparent lg:bg-transparent md:bg-white
       xl:py-8  lg:py-8  md:py-4 sm:py-6 flex justify-between items-center "
      >
        <Link to="/">
          <img
            className="xl:w-[250px] lg:w-[220px] md:w-[250px] sm:w-[200px] object-cover"
            src={logo}
          />
        </Link>

        <div className="gap-8 tracking-wide flex text-black xl:flex lg:flex md:hidden sm:hidden">
          <Link onClick={()=>dispatch(changeNav('itirilib'))} to="/">İtirilmiş əşyalar</Link>
          <Link onClick={()=>dispatch(changeNav('tapılıb'))} to="/">Tapılmış əşyalar</Link>
        </div>

        <div className="xl:flex lg:flex md:hidden sm:hidden">
          <Link
            to="/elanpaylash"
            id="share"
            className="bg-red-600 text-white px-6 py-3 tracking-wide rounded"
          >
            Elan yerləşdir
          </Link>
        </div>

        <div className="xl:hidden lg:hidden md:flex sm:flex">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setIsOpen(true)}
            className="bg-red-600 text-white 
rounded
px-3 py-2 text-xl"
          />
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 h-screen w-full bg-[#F4F4F4]"></div>
        )}
      </div>
    </div>
  );
};

export default Nav;
