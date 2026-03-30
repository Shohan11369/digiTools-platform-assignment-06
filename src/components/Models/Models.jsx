import React, { use } from "react";

import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  console.log(modelPromise);
  const models = use(modelPromise);
  return (
    <div className="container mx-auto">
      <div className=" text-center mt-4 mb-6 space-y-4">
        <h2 className="font-bold text-xl">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5  mb-4">
        {models.map((model, ind) => (
         
         <ModelCard key={ind} model={model} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Models;
