import React from "react";
import UserImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const Steps = () => {
  const stepData = [
    {
      id: 1,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      img: UserImg,
    },
    {
      id: 2,
      title: "Choose Tools",
      description:
        "Browse and select premium digital tools that suit your needs.",
      img: packageImg,
    },
    {
      id: 3,
      title: "Start Using",
      description: "Access your tools instantly and boost your productivity.",
      img: rocketImg,
    },
  ];

  return (
    <div className="bg-[#F9FAFC] py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-600 mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepData.map((step, index) => (
            <div
              key={step.id}
              className="relative p-6 shadow-xl rounded-2xl flex flex-col items-center space-y-4 bg-white"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-4">
                <button className="text-sm md:text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-3 py-1 text-white font-semibold">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </button>
              </div>

              {/* Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 p-4 rounded-full flex items-center justify-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg md:text-xl">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
