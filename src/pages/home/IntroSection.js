import React from "react";
import MyButton from "../../components/MyButton";
import Cloud from "./Cloud";
import MyGradientText from "../../components/MyGradientText";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center">
      <div className="max-w-full lg:w-1/2">
        <h4 className="text-lg tracking-widest mt-7">HI THERE !</h4>
        <h2 className="text-4xl md:text-5xl my-5">
          I'm <MyGradientText>Partha Debnath,</MyGradientText>
        </h2>
        <p className="text-justify mb-5">
          a recent graduate passionate about web development. I love to develop
          innovative projects and solve complex problems.I am always eager to
          learn and grow within the ever-evolving world of development.
        </p>
        <p className="text-justify mb-5 pb-5">
          With a focus on creating immersive web experiences, I blend creativity
          with functionality to build dynamic applications. Let's create
          something extraordinary together!
        </p>
        <MyButton>
          <Link to="/contact">Contact Info</Link>
        </MyButton>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Cloud></Cloud>
      </div>
    </section>
  );
};

export default IntroSection;
