import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IReports } from "../Main/App";
import { apiUrl } from "../../constants/API_URL";
import logo from "../../assets/images/logo.png";

const Findreport = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const [report, setReport] = useState<IReports | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `${apiUrl}/reports/find`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: query,
      }),
    })
      .then((response) => response.json())
      .then((data) => setReport(data.report));
  };

  return (
    <div
      className="w-full h-screen
    flex items-center justify-center  flex-col"
    >
          <img src={logo} className=" mb-12" alt="The logo of Buldum MMC" />

      <div className="w-2/5  flex flex-col items-center">
        <p className="mb-6 text-3xl font-semibold">Kodu daxil edin:</p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="w-full flex items-center"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Məs: 043456"
            className="px-6 w-full indent-2 py-5 outline-none border placeholder:text-black bg-white rounded"
          />
          <button className="bg-red-600 w-40 text-white px-6 py-5 rounded-sm text-center">
            Axtar
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="  px-6 border bg-white py-3 rounded-sm mt-5 text-center"
        >
          <span className="text-lg">Geri dön</span>
        </button>
        {report && (
          <div className="bg-[#F4F8FB] absolute top-0 left-0 w-full h-screen flex flex-col  items-center justify-center">
            <p className="text-left w-1/2 mb-4 text-2xl font-semibold">
              Paylaşılmayıb
            </p>
            <div className=" rounded-sm py-6 px-8 bg-[#fff] border w-1/2 ">
              <p className="">Status: {report.status}</p>
              <p className=" mt-1">Şəhər: {report.city}</p>
              <p className=" mt-1">Ərazi: {report.area}</p>
              <p className=" mt-1">Kateqoriya: {report.categories}</p>
              <p className=" mt-4">
                {report.fullName} : {report.description}
              </p>
              <p className=" mt-4"> Əlaqə nömrəsi : {report.phone}</p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="  px-6 border bg-red-500 text-white py-3 rounded-sm mt-5 text-center"
            >
              <span className="text-lg">Geri dön</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Findreport;
