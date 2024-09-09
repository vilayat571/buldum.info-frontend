import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IReports } from "../Main/App";
import { apiUrl } from "../../constants/API_URL";
import styles from "../../assets/styles/Modules/Find.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Report from "../../components/Find/Report";

const Findreport = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const [report, setReport] = useState<IReports | null>(null);

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>| React.FormEvent<HTMLButtonElement>) => {
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

  console.log(report);

  return (
    <div
      className="w-full h-screen
    flex items-center justify-center   flex-col"
    >
      <div className="xl:w-1/3  lg:w-1/3 md:w-1/3  sm:w-11/12   h-[340px] flex flex-col items-center">
        <p className=" text-3xl mb-1 font-semibold">Kodu daxil edin:</p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="w-full mt-5 mb-5 flex items-center"
        >
          <input
            type="number"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Məs: 043456"
            className="px-6 w-full indent-2 py-6 outline-none  placeholder:text-black bg-white rounded"
          />
        </form>
        <p className="mt-4  text-left w-full ">
          <span className="text-red-600">Diqqət:</span> Daxil etdiyiniz kodu 5
          rəqəmli olmalılıdır, kodun yazılışında rəqəmdən başqa simvollara icazə
          mövcud deyildir. doğruluğundan əmin
          <br />
          olun əks halda daxil etdiyiniz koda uyğun elan tapılmayacaqdır.
        </p>
        <div className="flex items-start justify-start  text-lg  mt-5 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="  px-6  bg-black text-white py-3 rounded-sm  text-center"
          >
            Geri dön
          </button>

          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-red-600  text-white px-6 py-3 rounded-sm text-center"
          >
            Axtar
          </button>
        </div>

        <div className={show ? styles.open : styles.close}>
          <button
            onClick={() => setShow(false)}
            className="absolute bg-red-500 text-lg text-white m-4 top-0 right-0 rounded px-4 py-2"
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
                Təəssuf ki, axtarışa uyğun elan tapılmadı :(
                <br />
                Əgər elanınızın mövcud olduğundan əminsinizsə <br /> bu zaman
                kodu səhf xatırlamış ola bilərsiniz
              </p>

              <div className="w-full flex justify-center mt-4">
                <button
                  onClick={() => setShow(false)}
                  className="  
                  xl:py-4 lg:py-4 md:py-3 sm:py-3
                  xl:px-6 lg:px-6 md:px-4 sm:px-4                  
                  border bg-green-500   text-white rounded  text-center"
                >
                  Təkrar sına
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Findreport;
