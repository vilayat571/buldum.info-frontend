import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";

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
    const url = "http://localhost:5000/api/v1/reports";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setReports(data.reports));
  }, []);

  const filteredReports: IReports[] | undefined = reports?.filter((report) => {
    return report.isActive == true && report;
  });

  return (
    <Layout>
      <div className="mt-28  text-center">
        <p className="text-4xl mb-3 font-black">
          Ümumi {reports?.length} elan mövcuddur.
        </p>
        <p className="text-lg mt-0 relative bottom-3">
          <span className="text-xl text-[#FF0000]  ">buldum</span> əşyalarını
          itirmiş şəxslərlə, onları tapmış <br /> şəxslər arasında rabitıə
          rolunu oynayır!
        </p>
      </div>
      <div className="w-3/5 flex flex-col mt-5 gap-4">
        {filteredReports?.map((report) => {
          return (
            <div className=" rounded-sm py-6 px-8 bg-white">
              <p className="">Status: {report.status}</p>
              <p className=" mt-1">Şəhər: {report.city}</p>
              <p className=" mt-1">Ərazi: {report.area}</p>
              <p className=" mt-1">Kateqoriya: {report.categories}</p>
              <p className=" mt-4">
                {report.fullName} : {report.description}
              </p>
              <p className=" mt-4"> Əlaqə nömrəsi : {report.phone}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#ff0000] px-6 py-3 text-sm mt-6 rounded-sm text-white tracking-wider">
          Daha çox göstər
        </button>
      </div>
    </Layout>
  );
};

export default App;
