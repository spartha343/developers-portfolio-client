import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectDetailsHeader = ({ projectData }) => {
  console.log(projectData);
  const { title, description, image, frontEnd, liveLink, backEnd } =
    projectData;
  return (
    <div
      className="hero min-h-[500px] rounded-3xl my-5"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 text-xl">{description}</p>
          <div className="mt-10">
            <Link to={backEnd}>
              <button
                className={`btn btn-sm btn-primary m-3 ${
                  backEnd === "" && "btn-disabled"
                }`}
              >
                Back End
              </button>
            </Link>
            <Link to={frontEnd}>
              <button
                className={`btn btn-sm btn-primary m-3 ${
                  backEnd === "" && "btn-disabled"
                }`}
              >
                Front End
              </button>
            </Link>
            <Link to={liveLink}>
              <button className="btn btn-sm btn-primary m-3">
                Live Site <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;
