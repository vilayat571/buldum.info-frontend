import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { apiUrl } from "../../constants/API_URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    const url = `${apiUrl}/reports`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setReports(data.reports));
  }, []);

  const filteredReports: IReports[] | undefined = reports?.filter((report) => {
    return report.isActive == true && report;
  });

  const [query, setQuery] = useState("");

  return (
    <Layout>
      <div className="mt-12  text-center">
        <p className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl mb-3 font-black">
          Ümumi {reports?.length} elan mövcuddur.
        </p>
      </div>
      <div className=" mt-1 mb-8 text-center xl:w-1/2 md:w-3/4 flex sm:w-4/5 lg:w-1/2">
      <button className="px-6 py-3 h-14 bg-[#1f1e1e] text-white rounded-l">
        <FontAwesomeIcon icon={faFilter}  />
      </button>
        <input
          required
          className="bg-white px-4 py-3 h-14 rounded placeholder:text-black font-thin w-full outline-none border-none "
          id="fullName"
          placeholder="Axtar.."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />{" "}
      </div>
      <div
        className="xl:w-4/5 lg:w-full md:w-full sm:w-full xl:px-40 lg:px-40 md:px-12 sm:px-6
       grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  mt-5 gap-6"
      >
        {filteredReports?.map((report) => {
          return (
            <div className=" rounded-sm py-4 col-span-1 px-6 bg-white">
              <p className="mb-2 font-semibold text-lg"> {report.city}</p>
              <p className=" line-clamp-3"> {report.description}</p>
              <button className="text-sm rounded border-[#b8b8b8] flex items-center border-[1.5px] px-4 py-3 mt-5">
                Bax{" "}
                <FontAwesomeIcon
                  className="text-sm px-1 ml-1"
                  icon={faExpand}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-red-600 px-6 py-3 text-sm mt-6 rounded-sm text-white tracking-wider">
          Daha çox göstər
        </button>
      </div>
    </Layout>
  );
};

export default App;
