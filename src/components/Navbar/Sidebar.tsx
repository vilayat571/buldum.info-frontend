import { useEffect } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { faPlayCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICategory } from "./Nav";
import { useAppDispatch } from "../../redux/store";
import { changeNav } from "../../redux/reducers/updateNav";

const Sidebar = ({
  isOpen,
  setPlay,
  setIsOpen,
}: {
  isOpen: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isOpen]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const categories: ICategory[] = [
    {
      id: 1,
      filterUrl: "itirilib",
      name: "İtirilmiş Əşyalar",
    },
    {
      id: 2,
      filterUrl: "tapılıb",
      name: "Tapılmış Əşyalar",
    },
    {
      id: 3,
      filterUrl: "bütün",
      name: "Bütün Əşyalar",
    },
  ];

  return (
    <div
    onClick={() => setIsOpen(!isOpen)}
    className="fixed top-0 left-0 h-[100vh] w-full bg-[#fff] px-4 py-6 pb-8 z-10 overflow-hidden">
      <div className="flex flex-col">
        <div className="px-1 flex items-center justify-between">
          <Logo />
          <FontAwesomeIcon
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 bg-red-600 text-white rounded text-xl"
            icon={faTimes}
          />
        </div>

        <div 
        className="flex mt-5 flex-col p-1 items-start gap-3">
          {categories.map((category: ICategory) => {
            return (
              <button
                key={category.id}
                className={`hover:bg-red-600 hover:text-white p-1 rounded`}
                onClick={() => {
                  dispatch(changeNav(category.filterUrl));
                  navigate("/");
                }}
              >
                {category.name}
              </button>
            );
          })}

          <Link
            to="/elantap"
            className="text-sm rounded border-[#b8b8b8] border-[1.5px] px-4 py-3
            hover:bg-[#DC2625]  hover:border-[#DC2625] transition duration-300 hover:text-white"
          >
            Elan tap
          </Link>

          <button
            onClick={() => setPlay(true)}
            className="text-sm rounded border-[#b8b8b8] cursor-pointer flex items-center border-[1.5px] px-4 py-3 
            hover:bg-[#DC2625] hover:border-[#DC2625] transition duration-300 hover:text-white"
          >
            <span className="cursor-pointer"> Video təlimat</span>
            <FontAwesomeIcon className="text-base px-1" icon={faPlayCircle} />
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};
export default Sidebar;
