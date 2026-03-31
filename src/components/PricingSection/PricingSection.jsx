import React from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btnText: "Get Started Free",
    highlighted: false,
  },
  {
    id: 2,
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    period: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btnText: "Start Pro Trial",
    highlighted: true, // Most Popular
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btnText: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <div className="py-16 px-4 md:px-16 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-2xl p-8 flex flex-col justify-between shadow-lg ${
              plan.highlighted
                ? "bg-linear-to-b from-[#7F3DFF] to-[#4F39F6] text-white transform scale-105"
                : "bg-white"
            }`}
          >
            {/* Highlight badge */}
            {plan.highlighted && (
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold self-center mb-4">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`${plan.highlighted ? "text-white/90" : "text-gray-600"} mb-4`}>
                {plan.description}
              </p>

              <div className="text-3xl font-bold mb-4">
                ${plan.price}
                <span className="text-base font-normal">/{plan.period}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className={`w-5 h-5 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-green-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 rounded-xl font-bold ${
                plan.highlighted
                  ? "bg-white text-[#4F39F6] hover:bg-white/90"
                  : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"
              }`}
            >
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
