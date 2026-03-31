import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
const ModelCard = ({ model, ind, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleButton = () => {
    setIsBuy(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Product already in cart");
      return;
    }

    setCarts([...carts, model]);
    toast.success("Added to cart");
  };

  return (
    <div>
      <div
        key={ind}
        className="p-3 space-y-4 shadow-lg rounded-lg border overflow-hidden border-zinc-300"
      >
        <h2 className="text-end">Best Seller</h2>
        <div className="flex justify-center items-center h-56">
          <img className="h-40 w-40 object-contain" src={model.image} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="font-bold">{model.title}</h2>
          <div className="mt-3">
            <p className="text-gray-600 text-sm leading-relaxed">
              {model.description}
            </p>
          </div>

          <div>
            <h2 className="font-semibold">{model.price}/ monthly</h2>
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
