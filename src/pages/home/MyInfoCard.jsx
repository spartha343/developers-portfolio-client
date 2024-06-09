/* eslint-disable react/prop-types */

const MyInfoCard = ({ myInfo }) => {
  const { bgColor, infoIcon, infoName, infoDetails } = myInfo;
  return (
    <div
      className={`p-5 text-white rounded-2xl shadow-md hover:tracking-wide hover:shadow-xl duration-300 flex items-center ${
        bgColor ? bgColor : "bg-accent"
      } `}
    >
      <div>{infoIcon}</div>
      <div className="pl-3">
        <h3 className="text-2xl mb-1">{infoName}</h3>
        <p>{infoDetails}</p>
      </div>
    </div>
  );
};

export default MyInfoCard;
