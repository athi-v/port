import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate()
  const handleSubmit = () => {

    try {
      navigate('/projects')
  }
    catch(error)
    {
      console.log(error)
    }

  }
  return (
    <div name="hero" className="w-full h-screen bg-[#f1f5f9]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl font-semi-bold text-[#334155]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#0f172a]">
          Athenkosi Vinqi
        </h1>
        <h2 className="text-3xl text-[#0f172a] sm:text-5xl font-bold py-4 max-w-[700px]">
          I am a Fullstack Web Developer.
        </h2>
        <p className="text-2xl font-semi-bold text-[#334155] py-2">
          Welcome to my personal portfolio
        </p>

        <div>
          {/* <Link to="/projects"> */}
            <button onClick={handleSubmit} className="text-[#0f172a] bg-teal-600 border-teal-600 group border-2 px-6 py-3 rounded flex items-center hover:bg-teal-900 hover:border-teal-900">
              See Projects
              <span className="group-hover:rotate-90 duration-500">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
