import notFoundImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-4 mt-50">
      <img src={notFoundImg} alt="" />
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="btn bg-green-500 text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
