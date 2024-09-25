import { useState } from "react";
import Layout from "../../layout/Layout";
import { categories, cities } from "../../constants/SelectOptions";
import { Link } from "react-router-dom";
import { apiUrl } from "../../constants/API_URL";

export interface IReport {
  categories: string;
  isActive: boolean;
  city: string;
  area: string;
  description: string;
  fullName: string;
  status: string;
  phone: string;
}

const ShareReport = () => {
  const [report, setReport] = useState<IReport>({
    categories: "", // selected
    isActive: false,
    city: "", // selected
    area: "",
    description: "",
    fullName: "",
    status: "", // selected
    phone: "",
  });

  const changeInputs = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReport({ ...report, [e.target.id]: e.target.value });
  };

  const [code, setCode] = useState("");

  const sendReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (report.description.length < 400) {
      alert('de')
    } else {
      const url = `${apiUrl}/reports/add`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(report),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status === "OK") {
            setCode(data.code);
          }
        })

        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <Layout>
      <div className=" w-full px-4 mt-24 flex flex-col items-center">
        {code.length > 0 && (
          <div
            className="fixed w-full h-screen right-0 top-0 bg-trasparent text-white z-10 
      flex items-center justify-center px-4 py-2 rounded"
          >
            <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#9b9b9b] opacity-50 "></div>
            <div className="text-black bg-white px-12 py-12 rounded w-1/2 absolute flex flex-col z-100 ">
              <p className="text-base">
                Təbriklər elan uğurla bazamıza əlavə edildi! 🎉
                <br />
                <br />
                Növbəti mərhələdə elan əməkdaşlarımız tərəfindən dəyərləndilicək
                əgər uyğun hesab edilərsə saytda elanlar bölməsinə əlavə
                ediləcək!
                <br />
                <br />
                Elanınızın paylaşılıb,paylaşılmadığı və ya gözləmədə olub
                olmadığı haqda məlumatı aşağıdakı kodu{" "}
                <Link to="/" className="underline text-red-500 px-1">
                  Elan tap
                </Link>{" "}
                səhifəsində qeyd edərək görə bilərsiniz!
                <br />
                <br />
                Elanınızın kodu:{" "}
                <span className="bg-green-500 text-white px-2 rounded py-1">
                  {code}
                </span>
                <br />
                <br />
                <p className="text-red-600">
                  Qeyd: kodunuzu itirməməyinizi tpvsiyyə edirik. Əks halda
                  elanın cai vəziyyəti haqqında məlumatı ala bilməyəcəksiniz.
                </p>
                <br />
                <button
                  onClick={() => setCode("")}
                  className=" bg-red-600 text-white px-5 py-2 rounded-sm"
                >
                  Bağa
                </button>
              </p>
            </div>
          </div>
        )}
        <p className="text-4xl font-semibold text-black">Yeni elan:</p>
        <form className="mt-8 w-full " onSubmit={(e) => sendReport(e)}>
          <div className="grid grid-cols-2 w-full gap-4 ">
            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Kateqoriya:</span>
              <select
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="categories"
                onChange={(e) => changeInputs(e)}
                value={report.categories}
              >
                {categories.map((category) => {
                  return (
                    <option key={Math.random()} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Şəhər:</span>
              <select
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="city"
                onChange={(e) => changeInputs(e)}
                value={report.city}
              >
                {cities.map((city) => {
                  return (
                    <option key={Math.random()} value={city.value}>
                      {city.city}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-12">
            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Ad və soyad:</span>
              <input
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="fullName"
                placeholder="Məs: Polad Həşimov.."
                onChange={(e) => changeInputs(e)}
                value={report.fullName}
              />
            </div>

            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Ərazi:</span>
              <input
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="area"
                placeholder="Məs: Şamaxinka ətrafı.."
                onChange={(e) => changeInputs(e)}
                value={report.area}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-12">
            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Telefon nömrəsi:</span>
              <input
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="phone"
                placeholder="Məs: 0508908727.."
                onChange={(e) => changeInputs(e)}
                value={report.phone}
              />
            </div>

            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Status:</span>
              <select
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="status"
                onChange={(e) => changeInputs(e)}
                value={report.status}
              >
                <option key={Math.random()} value={"seç"}>
                  Status seç
                </option>
                <option key={Math.random()} value={"itirilib"}>
                  İtirilib
                </option>
                <option key={Math.random()} value={"tapılıb"}>
                  Tapılıb
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full  mt-12">
            <span className="text-lg mb-2">Ərazi:</span>
            <textarea
              required
              className="bg-white w-full px-4 py-3 h-60  rounded outline-none border-none "
              id="description"
              placeholder="Məs: Gündüz saat 12 radələrində Şamaxinkada araz market tərəfdə saat tapmışam.."
              onChange={(e) => changeInputs(e)}
              value={report.description}
            />
          </div>

          <div className="mt-12 w-full items-center flex justify-center">
            <button
              className="hover:bg-red-600 text-xl hover:text-white
            transition duration-300
            bg-white
            px-6 py-3 rounded"
            >
              Göndər
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ShareReport;
