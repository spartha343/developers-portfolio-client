import { IoIosArrowForward } from "react-icons/io";

const MyButton = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-secondary to-primary text-white px-3 py-2 rounded-lg font-semibold hover:tracking-wider duration-300 flex items-center uppercase">
      {children}
      <IoIosArrowForward size={20} />
    </button>
  );
};

export default MyButton;
