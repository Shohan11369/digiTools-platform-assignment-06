import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
const ModelCard = ({ model, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleButton = () => {

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Product already in cart");
      return;
    }

     setIsBuy(true);

    setCarts([...carts, model]);
    toast.success("Added to cart");
  };

  return (
    <div>
      <div
        key={name.id}
        className="p-6 space-y-4 shadow-lg rounded-2xl border overflow-hidden border-zinc-300"
      >
        <h2 className="text-end">{model.tag}</h2>
        <div className="  ">
          <img className="h-20 w-20 object-contain" src={model.icon} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="font-bold">{model.name}</h2>
          <div className="mt-3">
            <p className="text-gray-600 text-sm leading-relaxed">
              {model.description}
            </p>
          </div>

          <div>
            <h2 className="font-semibold">{model.price}/ {model.period}</h2>
          </div>

          <div>
            <ul>
              {model.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* button */}
        <div>
          <button
            onClick={handleButton}
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full"
          >
            {isBuy ? "Purchase" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
