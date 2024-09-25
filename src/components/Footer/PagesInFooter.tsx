import { pages } from "../../constants/SelectOptions";
import { Link } from "react-router-dom";

const PagesInFooter = () => {
  return (
    <div className="flex xl:justify-center lg:justify-center md:justify-start sm:justify-start  w-full   ">
      <div className="flex flex-col items-start ">
        <div className="text-xl mb-2">Əsas səhifələr:</div>
        {pages.map((item) => {
          return (
            <Link
              key={Math.random()}
              className="text-base my-[2px]"
              to={item.href}
              onClick={() => {
                item.href.includes("/detallar") &&
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Enables smooth scrolling
                  });
              }}
            >
              {item.url}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PagesInFooter;
