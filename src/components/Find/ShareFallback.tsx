import React from "react";
import { IICON, socialMediaIcons } from "../../constants/SocialMediURL";
import { IReport } from "../../pages/Share/ShareReport";
import styles from "../../assets/styles/Modules/Share.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const ShareFallback: React.FC<{
  isShareSupported: boolean;
  reportData: IReport | null | undefined;
  setIsShareSupported: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isShareSupported, reportData, setIsShareSupported }) => {
  console.log(reportData);
  const shareUrl = "https://buldum.netlify.app/";
  const title = reportData?.description || "Bu saytı ziyarət edin"; // You can customize or remove this

  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsShareSupported(false);
  };

  return (
    <div
      onClick={(e) => close(e)}
      className={`${
        !isShareSupported ? styles.open : styles.close
      } flex items-center fixed  justify-center h-screen `}
    >
      <div className="text-white fixed  top-0 left-0 bg-black opacity-10 w-full h-screen" />

      <div className="w-auto fixed flex items-center justify-center mx-auto text-black bg-white h-auto px-3 py-3 rounded">
        <div className="text-black flex flex-col gap-y-3  ">
          <div className="flex flex-col gap-3">
            {socialMediaIcons.map((icon: IICON) => {
              const completeUrl =
                icon.url +
                encodeURIComponent(shareUrl) +
                (icon.text === "WhatsApp"
                  ? "%20" + encodeURIComponent(title)
                  : "");
              return (
                <a
                  href={completeUrl}
                  className=" flex gap-2 items-center  border-[1px] border-[#b3b3b3] p-3 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.text}
                >
                  <img src={icon.src} alt={icon.alt} className="w-5" />{" "}
                  <span className="text-lg">
                    {icon.text}{" "}
                    <FontAwesomeIcon
                      className=" px-1 ml-1 text-xl text-red-600"
                      icon={faShare}
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareFallback;
