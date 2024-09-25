import { categories } from "../../constants/SelectOptions";
import "react-toastify/dist/ReactToastify.css";
import Copyrght from "../../atoms/Footer/Copyrght";
import FormFooter from "./FormFooter";
import PagesInFooter from "./PagesInFooter";
import ScrollToTop from "react-scroll-to-top";

const Foot: React.FC<{ widthOfLayout: string }> = ({ widthOfLayout }) => {
  return (
    <div className={` ${widthOfLayout} flex flex-col pt-12 pb-8  w-full`}>
      <ScrollToTop
        height="20"
        color="white"
        style={{
          backgroundColor: "#DC2625",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        smooth
      />

      <div
        className={` flex xl:flex-row md:flex-col sm:flex-col lg:flex-row gap-12 gap-y-20 items-start justify-between  pb-16  border-b w-full`}
      >
        <FormFooter />
        <PagesInFooter />

        <div className="flex xl:justify-end lg:justify-end md:justify-start sm:justify-start w-full  ">
          <div className="flex  items-start flex-col ">
            <div className="text-xl mb-2">Kateqoriyalar:</div>
            {categories.map((item) => {
              return (
                <button
                  key={Math.random()}
                  className="text-base my-[2px]"
                  value={item.value}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Copyrght />
    </div>
  );
};

export default Foot;
