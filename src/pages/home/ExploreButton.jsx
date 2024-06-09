import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const ExploreButton = ({ link, text }) => {
  return (
    <div className="mt-7">
      <Link to={link}>
        <button className="btn btn-outline btn-accent absolute right-8 text-base uppercase">
          {text} <IoArrowForwardOutline size={20} />
        </button>
      </Link>
    </div>
  );
};

export default ExploreButton;
