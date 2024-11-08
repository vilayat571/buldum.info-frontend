import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img className="xl:w-[200px] lg:w-[180px] md:w-[160px] sm:w-[160px] object-cover" src={logo} />
    </Link>
  );
};

export default Logo;
