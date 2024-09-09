import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faFilter } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../../constants/SelectOptions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getFilteredData } from "../../redux/reducers/allReports";

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

  const dispatch=useAppDispatch()
  const statusNav = useAppSelector((state) => state.updateNav.navCat);
  

  useEffect(() => {
   dispatch(getFilteredData({category, statusNav})).then((data)=>setReports(data.payload.reports))
  }, [category, statusNav]);



  console.log(category, reports);

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

      <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  mt-5 gap-6">
        {reports?.map((report) => {
          return (
            <div className=" rounded-sm py-4 col-span-1 px-6 bg-white">
              <p className="mb-2 font-semibold text-lg"> {report.city}</p>
              <p className=" line-clamp-3"> {report.description}</p>
              <button className="text-sm rounded border-[#b8b8b8] flex items-center border-[1.5px] px-4 py-3 mt-5">
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
    </Layout>
  );
};

export default App;
