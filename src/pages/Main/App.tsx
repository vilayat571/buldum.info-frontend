import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faFilter,
  faMinimize,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { categories } from "../../constants/SelectOptions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getFilteredData } from "../../redux/reducers/allReports";
import styles from "../../assets/styles/Modules/FullFill.module.css";
import { IReport } from "../Share/ShareReport";
import { IICON, socialMediaIcons } from "../../constants/SocialMediURL";

export interface IReports {
  categories: string;
  isActive: boolean;
  city: string;
  area: string;
  description: string;
  fullName: string;
  status: string;
  email: string;
  phone: string;
}

const App = () => {
  const [reports, setReports] = useState<IReports[] | null>(null);
  const [category, setCategory] = useState("");

  const dispatch = useAppDispatch();
  const statusNav = useAppSelector((state) => state.updateNav.navCat);

  useEffect(() => {
    dispatch(getFilteredData({ category, statusNav })).then((data) =>
      setReports(data.payload.reports)
    );
  }, [category, dispatch, statusNav]);

  const [reportData, setReportData] = useState<IReport | null>(null);

  const [isShareSupported, setIsShareSupported] = useState<boolean>(true);

  const socialMediaShare = (cardData: IReport) => {
  console.log(cardData)
    setIsShareSupported(false);

    // if (navigator.share) {
    //   navigator.share({
    //     title: cardData.categories,
    //     text: cardData.description.slice(0, 200),
    //     url: "https://buldum.netlify.app/",
    //   });
    // } else {
    //   setIsShareSupported(false);
    // }
  };
  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsShareSupported(false);
  };

  const shareUrl = "https://buldum.netlify.app/";
  const title = "Check out this awesome website!"; // You can customize or remove this

  return (
    <Layout>
      <div className="mt-12 w-full  text-center">
        <p className="xl:text-4xl lg:text-5xl md:text-3xl sm:text-2xl mb-3 font-black">
          Hal-hazırda{" "}
          <span className=" font-semibold text-[#f00] ">{reports?.length}</span>{" "}
          aktiv
          <br /> elan mövcuddur.
        </p>
      </div>

      {/* search an d filter bar */}
      <div className=" mb-8 text-center xl:w-1/2 md:w-3/4 flex sm:w-11/12 mt-2  lg:w-1/2">
        <button className="px-6 py-3 h-14 bg-[#000] text-white rounded-l ">
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <select
          required
          className="bg-white px-4 py-3 h-14 rounded placeholder:text-black font-thin w-full outline-none border-none "
          id="categories"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {categories.map((item) => {
            return (
              <option key={Math.random()} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>

      {/* is not support card */}

      <div
        onClick={(e) => close(e)}
        className={`${
          !isShareSupported ? styles.open : styles.close
        } flex items-center justify-center `}
      >
        <div className="text-white absolute top-0 left-0 bg-black opacity-60 w-full h-screen" />

        <div className="w-auto absolute flex items-center justify-center mx-auto text-black bg-white h-auto px-3 py-3 rounded">
          <div className="text-black flex flex-col gap-y-3  ">
            <div className="flex flex-col gap-3">
              {socialMediaIcons.map((icon: IICON) => {
                const completeUrl =
                  icon.url +
                  encodeURIComponent(shareUrl) +
                  (icon.text === "WhatsApp"
                    ? "%20" + encodeURIComponent(title)
                    : "");
                return (
                  <a
                    href={completeUrl}
                    className=" flex gap-2 items-center  border-[1px] border-[#b3b3b3] p-3 py-2 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={icon.text}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-5" />{" "}
                    <span className="text-lg">
                      {icon.text}{" "}
                      <FontAwesomeIcon
                        className=" px-1 ml-1 text-xl text-red-600"
                        icon={faShare}
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* main cards */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  mt-5 gap-6">
        {reports?.map((report) => {
          return (
            <div
              key={Math.random()}
              className=" rounded-sm py-5 col-span-1 px-6 bg-white"
            >
              <p className="mb-4 font-semibold text-lg flex justify-between items-center">
                <span>{report.city}</span>
                <button onClick={() => socialMediaShare(report)}>
                  <FontAwesomeIcon
                    className=" px-1 ml-1 text-xl text-red-600"
                    icon={faShare}
                  />
                </button>
              </p>
              <p className="leading-[25px] line-clamp-3 ">
                {" "}
                {report.description}
              </p>
              <button
                onClick={() => setReportData(report)}
                className="text-sm rounded-[3px] border-[1px] border-[#b3b3b3]
                flex items-center
                px-4 py-3 mt-5"
              >
                Bax
                <FontAwesomeIcon
                  className="text-sm px-1 ml-1"
                  icon={faExpand}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* open-close card */}
      <div
        className={`${
          reportData != null ? styles.open : styles.close
        } flex items-center justify-center `}
      >
        <div className="text-white absolute top-0 left-0 bg-black opacity-60 w-full h-screen" />

        <div className="w-1/2 absolute flex items-center justify-center mx-auto text-black bg-white h-auto px-12 py-12 rounded">
          <div className="flex flex-col items-start gap-y-[10px]">
            <p className="text-3xl text-black font-semibold mb-2">
              Elan sahibi əşya
              {reportData?.status == "itirilib" ? " itirib" : " tapıb"}:
            </p>
            <p className="border-[1px] border-[#b3b3b3] rounded px-5 py-3  ">
              Şəhər : {reportData?.city}
            </p>

            <div className="border-[1px] border-[#b3b3b3] flex flex-col gap-2 rounded px-5 py-3">
              <p>Ərazi : {reportData?.area}</p>
              <p>Elan sahibi : {reportData?.fullName}</p>
              <p>Kateqoriya : {reportData?.categories}</p>
              <p>Ətraflı : {reportData?.description}</p>
              <p>Əlaqə nömrəsi : {reportData?.phone}</p>
            </div>

            <button
              onClick={() => setReportData(null)}
              className="flex items-center
             bg-red-600 text-white text-sm rounded
            px-4 py-3 mt-5"
            >
              Bağla
              <FontAwesomeIcon
                className="text-sm px-1 ml-1"
                icon={faMinimize}
              />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
