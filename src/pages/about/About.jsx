import { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import computerman from "../../assets/computerMan.jpg";
import MyButton from "../../components/MyButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  const description =
    "I love to develop beautiful web application and explore new web technologies";

  const details = [
    { fieldName: "Name", fieldValue: "Partha Debnath" },
    {
      fieldName: "Phone",
      fieldValue: "+8801624457470",
      link: "tel:+8801624457470"
    },
    {
      fieldName: "Email",
      fieldValue: "spartha343@gmail.com",
      link: "mailto:spartha343@gmail.com"
    },
    {
      fieldName: "Education",
      fieldValue: `B.Sc in Mathematics, Shahjalal University of Science And Technology, Sylhet`,
      link: "https://www.sust.edu/"
    },
    { fieldName: "Languages", fieldValue: "Bangla(native), English(good)" },
    {
      fieldName: "Address",
      fieldValue: "Narayanganj, Dhaka, Bangladesh.",
      link: "https://www.google.com/maps/place/Narayanganj"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Partha&apos;s Portflio | About</title>
      </Helmet>

      <SectionHeader text="About" description={description}>
        Myself
      </SectionHeader>

      <div className="flex items-center flex-col lg:flex-row">
        <div className="mb-2 w-full lg:w-1/2">
          <img src={computerman} alt="Man with a computer" className="w-100" />
        </div>
        <div className="w-full lg:w-1/2 px-3">
          <div className="overflow-x-auto font-semibold">
            <table className="table">
              <tbody className="text-base">
                {details.map((detail, idx) => (
                  <tr key={idx}>
                    <td>{detail.fieldName}</td>
                    <td>
                      <Link to={detail?.link}>{detail.fieldValue}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-3 my-5">
            <Link to="/contact">
              <MyButton>Hire Me !</MyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
