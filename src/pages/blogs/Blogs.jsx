import { useEffect } from "react";
import MyGradientText from "../../components/MyGradientText";
import { Helmet } from "react-helmet";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-5xl h-96 flex items-center justify-center">
      <Helmet>
        <title>Partha&apos;s Portflio | Blogs</title>
      </Helmet>

      <h3>
        <MyGradientText>Coming</MyGradientText> Soooon.....
      </h3>
    </div>
  );
};

export default Blogs;
