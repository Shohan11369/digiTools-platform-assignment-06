import React from "react";

const Cart = ({ carts }) => {
  return (
    <div className="p-5 shadow shadow-amber-50 ">
      <h1 className="text-xl font-bold mb-6">Your Carts</h1>

      <div className="mb-4 space-y-5 container mx-auto">
        {carts.map((item) => (
          <div key={item.id}>
            <div className="flex justify-start items-center gap-4 border p-5 bg-gray-100">
              <div>
                <img
                  className="w-10 h-20 object-contain"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-xl">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
