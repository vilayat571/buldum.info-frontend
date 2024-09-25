import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Copyrght = () => {
  return (
    <div className="pb-0 mt-12 w-full text-base  flex justify-between items-center">
      <p>
        © 2024 <span className="text-red-600">buldum.info</span> bütün haqlar
        qorunur.
      </p>

      <div className="flex items-center text-2xl gap-5">
        <Link to="/">f</Link>
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to="/">G</Link>
      </div>
    </div>
  );
};

export default Copyrght;
