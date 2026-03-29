import React, { use } from "react";

const Models = ({ modelPromise }) => {
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
          <div key={ind} className="border p-5 space-y-4">
            <h2>Best Seller</h2>
            <div>
              <img src={model.image} alt="" />
            </div>
            <div className="space-y-3">
              <h2 className="font-bold">{model.title}</h2>
              <p>{model.description}</p>
            </div>
            <div>
              <h2 className="font-semibold">{model.price}/ monthly</h2>
            </div>
            <div>
              <li> {model.features} </li>
            </div>

            {/* button */}
            <div>
                <button className="btn bg-blue-500 text-white">But now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
