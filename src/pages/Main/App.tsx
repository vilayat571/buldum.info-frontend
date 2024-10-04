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
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { getFilteredData } from "../../redux/reducers/allReports";
import styles from "../../assets/styles/Modules/FullFill.module.css";
import { IReport } from "../Share/ShareReport";
import ShareFallback from "../../components/Find/ShareFallback";
import { getHoleDataCounts } from "../../redux/reducers/holeReportsCount";
import updateCategory from "../../redux/reducers/updateCategory";

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
  const [reports, setReports] = useState<IReports[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState(false);

  const [limit, setLimit] = useState(3);
  const singleCategory: string = useAppSelector(
    (state) => state.updateCategory.singleCategory
  );
  const [category, setCategory] = useState("Hamısı");

  const dispatch = useAppDispatch();
  const statusNav = useAppSelector((state) => state.updateNav.navCat);
  const holeCount = useAppSelector(
    (state: RootState) => state.holeReports.count
  );

  useEffect(() => {
    dispatch(getHoleDataCounts());
    dispatch(
      getFilteredData({
        category,
        statusNav,
        limit,
      })
    ).then((data) => {
      console.log("Data", data.payload);
      setReports(data.payload.reports);
      setLoading(false);
    });
  }, [category, dispatch, statusNav, limit, singleCategory]);

  useEffect(() => {
    const handleScroll = () => {
      // Adding a buffer of 100px to ensure we fetch data before reaching the exact bottom
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.offsetHeight &&
        !loading
      ) {
        setLimit((prevLimit) => prevLimit + 6);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const [reportData, setReportData] = useState<IReport | null>(null);
  const [isShareSupported, setIsShareSupported] = useState<boolean>(true);
  const [sharedReport, setSharedReport] = useState<IReport | null>(null);

  const socialMediaShare = (cardData: IReport | null) => {
    if (navigator.share) {
      navigator.share({
        title: cardData?.categories,
        text: cardData?.description.slice(0, 200),
        url: "https://buldum.netlify.app/",
      });
    } else {
      setSharedReport(cardData);
      setIsShareSupported(false);
    }
  };

  return (
    <Layout>
      <div className="mt-12 w-full  text-center">
        <p className="xl:text-4xl lg:text-5xl md:text-3xl sm:text-2xl mb-3 font-black">
          Hal-hazırda
          <span className="font-semibold text-[#f00] mx-3">
             {holeCount?.count}
          </span>
           aktiv
           <br /> elan mövcuddur
        </p>
      </div>

      {/* search and filter bar */}
      <div className=" mb-8 text-center xl:w-1/2 md:w-3/4 flex sm:w-11/12 mt-2 lg:w-1/2">
        <button
          className="px-6 py-3 h-14 bg-[#000] text-white rounded-l 
         hover:bg-[#DC2625] transition duration-300"
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <select
          required
          className="bg-white px-4 py-3 h-14 rounded placeholder:text-black font-thin w-full outline-none border-none "
          id="categories"
          onChange={(e) => {
            setCategory(e.target.value);
            dispatch(updateCategory(""));
          }}
          value={category}
        >
          {categories.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>

      {/* is not support card */}
      <ShareFallback
        isShareSupported={isShareSupported}
        setIsShareSupported={setIsShareSupported}
        reportData={reportData}
      />

      {/* main cards */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mb-20 mt-5 gap-6">
        {reports?.map((report, index) => {
          return (
            <div
              key={index}
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
                className="text-sm rounded-[3px]
                 hover:bg-red-500 hover:text-white transition duration-300 hover:border-none
                 border-[1px] border-[#b3b3b3]
                flex items-center
                px-4 py-3 mt-5"
              >
                Bax
                <FontAwesomeIcon
                  className="text-sm px-1 ml-1"
                  icon={faExpand}
                />
              </button>

              <ShareFallback
                isShareSupported={isShareSupported}
                setIsShareSupported={setIsShareSupported}
                reportData={sharedReport}
              />
            </div>
          );
        })}
      </div>

      {/* open-close card */}
      <div
        className={`${
          reportData != null ? styles.open : styles.close
        } flex items-center justify-center  `}
      >
        <div className="text-white fixed top-0 left-0 bg-black opacity-60 w-full h-screen" />

        <div className="w-1/2 absolute flex items-center justify-center mx-auto text-black bg-white h-auto px-12 py-12 rounded">
          <div className="flex flex-col items-start gap-y-[10px]">
            <p className="text-3xl text-black font-semibold mb-2">
              Elan sahibi əşya
              {reportData?.status == "itirilib" ? " itirib" : " tapıb"}:
            </p>
            <p className="border-[1px] border-[#b3b3b3] w-full items-center justify-between flex rounded px-5 py-3  ">
              <span> Şəhər : {reportData?.city}</span>{" "}
              <button onClick={() => socialMediaShare(reportData)}>
                <FontAwesomeIcon
                  className=" px-1 ml-1 text-xl text-red-600"
                  icon={faShare}
                />
              </button>
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
              className="flex items-center bg-black transition duration-300
             hover:bg-red-600 text-white text-sm rounded
            px-4 ml-0 py-3 mt-1"
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
