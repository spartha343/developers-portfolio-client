import MyGradientText from "./MyGradientText";

const SectionHeader = ({ children, text, description }) => {
  return (
    <div className="text-center my-12">
      <h3 className="text-4xl">
        {text} <MyGradientText>{children}</MyGradientText>
      </h3>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default SectionHeader;
