import React from "react";
import { IReports } from "../../pages/Main/App";
import { useNavigate } from "react-router-dom";

const Report: React.FC<{ report: IReports | null }> = ({ report }) => {

  const navigate = useNavigate();


  return (
    <div className=" flex items-center justify-center">
      <div className=" rounded xl:w-1/2 lg:w-3/5 sm:w-11/12 md:4/5 bg-white p-6">
        <p className="text-left w-1/2 mb-4 text-2xl  font-semibold">
          Paylaşılmayıb
        </p>
        <div className=" rounded-sm  bg-[#fff] ">
          <p className="">Status: {report?.status}</p>
          <p className=" bo mt-1">Şəhər: {report?.city}</p>
          <p className=" bo mt-1">Ərazi: {report?.area}</p>
          <p className=" bo mt-1">Kateqoriya: {report?.categories}</p>
          <p className=" mt-4">
            {report?.fullName} : {report?.description}
          </p>
          <p className="mt-2"> Əlaqə nömrəsi : {report?.phone}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="  px-5 text-base border bg-green-500 text-white py-3 rounded mt-4 text-center"
        >
          <span className="text-lg">Geri dön</span>
        </button>
      </div>
    </div>
  );
};

export default Report;
