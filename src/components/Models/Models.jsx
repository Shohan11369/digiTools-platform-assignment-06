import React, { use } from "react";

import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  console.log(modelPromise);
  const models = use(modelPromise);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5  mb-4">
        {models.map((model, ind) => (
          <ModelCard
            key={ind}
            model={model}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
