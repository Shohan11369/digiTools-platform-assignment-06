import React from "react";

const Cart = ({ carts, setCarts }) => {
  // total count

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentButton = () => {
    setCarts([]);
  };

  return (
    <div className="p-5 shadow shadow-amber-50 container mx-auto">
      <h1 className="text-xl font-bold mb-6">Your Carts</h1>

      {carts.length === 0 ? (
        <p className="text-center p-6 bg-amber-50 text-xl font-semibold">Cart is empty</p>
      ) : (
        <>
          <div className="mb-4 space-y-5">
            {carts.map((item) => (
              <div key={item.id}>
                <div className="flex justify-start items-center gap-4  p-5 bg-gray-100 rounded-2xl">
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

                  <div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* total */}

          <div className="flex justify-between bg-gray-100 p-5 rounded-4xl text-xl font-bold">
            <div>Total</div>
            <div>{totalPrice}</div>
          </div>

          {/* checkout */}

          <div className="mt-5">
            <button
              onClick={handlePaymentButton}
              className=" w-full p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl font-bold rounded-2xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
