import React from "react";
import UserImg from "../../assets/user.png";

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
      img: UserImg,
    },
    {
      id: 3,
      title: "Start Using",
      description: "Access your tools instantly and boost your productivity.",
      img: UserImg,
    },
  ];

  return (
    <div className="bg-[#F9FAFC]">
      <div className="space-y-4 mb-6 mt-7 container mx-auto p-8 ">
        {/* Heading */}
        <div className="text-center mb-5 mt-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepData.map((step, index) => (
            <div
              key={step.id}
              className=" p-6 shadow-2xl rounded-2xl flex flex-col items-center space-y-4"
            >
              <div className="w-full flex justify-end">
                <button className="text-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-4 py-2 text-white">
                  0{index + 1}
                </button>
              </div>

              <div className="w-16 h-18 bg-blue-100 p-3 rounded-full">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
