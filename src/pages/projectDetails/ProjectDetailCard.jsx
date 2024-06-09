/* eslint-disable react/prop-types */

const ProjectDetailCard = ({ data }) => {
  return (
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 my-5">
      {data.map(({ text, image }, idx) => (
        <div key={idx} className="card glass shadow-2xl">
          <figure>
            <img src={image} alt={text} />
          </figure>
          <div className="card-body">
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailCard;
