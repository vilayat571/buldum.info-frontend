import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="flex flex-col w-full items-center">
      {play && (
        <div
        
          className="fixed w-full h-screen right-0 top-0 bg-trasparent text-white z-10 
  flex items-center justify-center px-4 py-2 rounded"
        >
          <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#9b9b9b] opacity-50 "></div>
          <div  className="text-black bg-white px-6 py-6 rounded w-auto items-center justify-center absolute flex flex-col z-100 ">

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ix9cRaBkVe0?si=1kWDgRG7FV_WOeiI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div
        className="w-full pt-4 py-4 text-sm
        xl:flex lg:flex md:hidden sm:hidden
      xl:px-40  lg:px-40 md:px-12 sm:px-6 
      justify-between bg-[#fff] items-center "
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
            className="text-sm rounded border-[#b8b8b8] flex items-center border-[1.5px] px-4 py-3 "
          >
            <span> Necə çalışır</span>{" "}
            <FontAwesomeIcon className="text-base px-1" icon={faPlayCircle} />
          </button>
        </div>
      </div>
      <div
        className="xl:w-4/5 lg:w-full md:w-full sm:w-full
        sm:bg-white xl:bg-transparent lg:bg-transparent md:bg-white
       xl:py-8  lg:py-8  md:py-4 sm:py-6 xl:px-40  lg:px-40 md:px-12 sm:px-6  flex justify-between items-center "
      >
        <Link to="/">
          <img
            className="xl:w-[250px] lg:w-[220px] md:w-[250px] sm:w-[200px] object-cover"
            src={logo}
          />
        </Link>

        <div className="gap-8 tracking-wide flex text-black xl:flex lg:flex md:hidden sm:hidden">
          <Link to="/">İtirilmiş əşyalar</Link>
          <Link to="/">Tapılmış əşyalar</Link>
        </div>

        <div className="xl:flex lg:flex md:hidden sm:hidden">
          <Link
            to="/elanpaylash"
            className="bg-red-600 text-white px-6 py-3 rounded"
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
