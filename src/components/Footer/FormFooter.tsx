import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../assets/images/logo.png";

const FormFooter = () => {
  const [text, setText] = useState<string>("");

  const submitOffer = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const url = "https://buldum.info/api/v1/offers/add";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((data) => data.json())
      .then((res) => {
        toast(res.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          style: {
            backgroundColor: res.status == "OK" ? "green" : "red",
            color: "white",
            fontFamily: "Poppins",
          },
        });
        res.status &&
          setTimeout(() => {
            setText("");
          }, 2000);
      });
  };

  return (
    <div className="flex flex-col w-full ">
      <ToastContainer />

      <Link to="/">
        <img className="w-[200px] object-cover" src={logo} />
      </Link>

      <p
        className="mt-6 text-justify tracking-tight"
        style={{ hyphens: "auto" }}
      >
        Əşyalarını itirənlərlə onları tapanlar arasında körpü rolunu oynayaraq,
        itən əşyaların sahiblərinə qaytarılmasına yardım edirik.
        <span className="text-red-600"> Buldumla</span> artıq itirmək problem
        deyil! Hər hansı bir təklifiniz olarsa:
      </p>

      <form
        onSubmit={(e) => submitOffer(e)}
        className="flex flex-col gap-2 items-start justify-start mt-6 "
      >
        <div className="flex  items-center mt-0">
          <input
            value={text}
            required={true}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Təklif yaz..."
            className=" border border-[#c8c8c8] outline-none placeholder:tracking-wider placeholder:text-[#000] px-5 py-4
                 h-[66px] rounded-l indent-3 w-full"
          />
          <button
            onClick={(e) => submitOffer(e)}
            className="py-5 rounded-r px-5 h-[66px] text-white bg-red-500"
          >
            Göndər
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormFooter;
