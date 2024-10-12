import React from "react";
import { IReports } from "../../pages/Main/App";
import { useNavigate } from "react-router-dom";

const Report: React.FC<{ report: IReports | null }> = ({ report }) => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex items-center justify-center">
      <div className=" rounded xl:w-1/2 lg:w-3/5 sm:w-11/12 md:4/5 bg-white p-6">
        <p className="text-left w-1/2 mb-8 text-xl  font-semibold">
        <span className="bg-[#EF4444] text-white px-4 py-3  rounded">
        Paylaşılmayıb
        </span>
        </p>
        <div className=" rounded-sm  flex flex-col gap-y-3border ">
          <div className="px-2 py-2 rounded mb-5 border-[#c2c2c2] border-[1px]">
            <p className="">Status: {report?.status}</p>
            <p className=" bo mt-2">Şəhər: {report?.city}</p>
            <p className=" bo mt-2">Ərazi: {report?.area}</p>
            <p className=" bo mt-2">Kateqoriya: {report?.categories}</p>
          </div>
          <div className="px-2 py-2 rounded mb-2 border-[#c2c2c2] border-[1px]">
            <p className=" mt-1">
              {report?.fullName} : {report?.description}
            </p>
            <p className="mt-2"> Əlaqə nömrəsi : {report?.phone}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="  px-5 text-base borde transition duration-300 hover:bg-[#F8F8F8] hover:text-black bg-red-500 text-white py-3 rounded mt-4 text-center"
          >
            Geri dön
          </button>
          <button
            onClick={() => navigate('/')}
            className="  px-5 text-base bg-[#F8F8F8] transition duration-300 hover:bg-red-500 hover:text-white text-black py-3 rounded mt-4 text-center"
          >
            Bütün elanlar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
