import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IReports } from "../Main/App";
import { apiUrl } from "../../constants/API_URL";
import styles from "../../assets/styles/Modules/Find.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Report from "../../components/Find/Report";
import { motion } from "framer-motion";

const Findreport = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const [report, setReport] = useState<IReports | null>(null);

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (query.length === 5) {
      setLoading(true);
      setShow(true);

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
        .then((data) => setReport(data.report))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      alert("Kod 5 rəqəmli olamlıdır. Zəhmət olmasa doğru kodu daxil edin! ");
    }
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className="w-full h-screen
   grid grid-cols-2"
      >
        <div className="col-span-1"></div>

        <div className="col-span-1 border flex w-full justify-center items-center">
          <div className="flex flex-col h-[30vh]">
            <p className=" text-3xl mb-1 font-semibold">
              Elan kodunu daxil edin:
            </p>

            <form
              onSubmit={(e) => handleSubmit(e)}
              action=""
              className="w-full mt-5 mb-1 flex items-center"
            >
              <input
                type="tel"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Məs: 43456"
                className="px-6 w-full indent-2 py-6 outline-none  placeholder:text-black bg-white rounded"
              />
            </form>
            <p className="mt-3 px-2 text-[#000] relative text-left w-full ">
              <span className="text-[#DC2625]">Diqqət:</span> Daxil etdiyiniz
              kodu 5 rəqəmli olmalılıdır, kodun yalnız rəqəmlərdən ibarət
              olmalıdır. Kodun doğruluğundan əmin olun əks halda daxil etdiyiniz
              koda uyğun elan tapılmayacaqdır.
            </p>
            <div className="flex items-start justify-start  text-lg  mt-5 gap-4">
              <button
                onClick={() => navigate(-1)}
                className="  px-6  bg-white  text-black hover:bg-[#DC2625] hover:text-white transition duration-300 py-3 rounded text-center"
              >
                Geri dön
              </button>

              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-[#DC2625] hover:bg-white hover:text-black transition duration-300  text-white px-8 py-3 rounded text-center"
              >
                Axtar
              </button>
            </div>

            <motion.div className={show ? styles.open : styles.close}>
              <button
                onClick={() => setShow(false)}
                className="absolute bg-white hover:bg-red-500 text-lg hover:text-white text-black
              transition duration-300 m-4 top-0 right-0 rounded px-4 py-2 cursor-pointer"
              >
                {" "}
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {loading ? (
                <div className="text-3xl text-black">Elan axtarılır...</div>
              ) : report != null && report != undefined ? (
                <Report report={report} />
              ) : (
                <div className="flex text-center itemscenter flex-col">
                  <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg">
                    <span className="text-red-600">
                      Təəssuf ki, axtarışa uyğun elan tapılmadı.
                    </span>
                    <br />
                    Əgər elanınızın mövcud olduğundan əminsinizsə <br /> bu
                    zaman kodu səhf yazmış ola bilərsiniz.
                  </p>

                  <div className="w-full flex justify-center mt-4">
                    <button
                      onClick={() => setShow(false)}
                      className="  
                  px-4 text-base py-3              
                  transition duration-200 bg-red-500   text-white hover:bg-white  hover:text-black  rounded  text-center"
                    >
                      Yenidən sına
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Findreport;
