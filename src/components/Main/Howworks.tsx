import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Howworks: React.FC<{
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ play, setPlay }) => {
  return (
    <div
      className={` popup ${play ? "open " : "close"}  
   `}
    >
      <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#9b9b9b] opacity-50 "></div>
      <div className="text-black bg-white p-6 rounded w-auto items-center justify-center absolute flex flex-col z-100 ">
        <div className="w-full relative bottom-1 text-right">
          <button onClick={() => setPlay(false)}>
            <FontAwesomeIcon
              className=" hover:text-red-600 text-lg"
              icon={faTimes}
            />
          </button>
        </div>
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
  );
};

export default Howworks;
