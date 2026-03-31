import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  // total count

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentButton = () => {
    setCarts([]);
    toast.success("Payment successful");
  };

  //   delete function

  const handleDelete = (item) => {
    console.log(item);

    const filterArray = carts.filter((i) => i.id !== item.id);
    setCarts(filterArray);

    toast.error("Delete cart");
  };

  return (
    <div>
      <div className=" flex justify-center  bg-gray-50">
        <div className="p-5 w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto shadow shadow-amber-50 bg-white rounded-2xl">
          <h1 className="text-xl font-bold mb-6 text-start">Your Carts</h1>

          {carts.length === 0 ? (
            <p className="text-center p-6 bg-amber-50 text-xl font-semibold rounded-xl">
              Cart is empty
            </p>
          ) : (
            <>
              <div className="mb-4 mx-auto space-y-5">
                {carts.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-start items-center gap-4 p-5 bg-gray-100 rounded-2xl">
                      <img
                        className="w-10 h-20 object-contain"
                        src={item.icon}
                        alt=""
                      />

                      <div className="flex-1 space-y-2">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-xl">${item.price}</p>
                      </div>

                      <button
                        className="btn p-2 text-red-500 cursor-pointer"
                        onClick={() => handleDelete(item)}
                      >
                        <MdDelete size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* total */}
              <div className="flex justify-between bg-gray-100 p-5 rounded-2xl text-xl font-bold">
                <div>Total</div>
                <div>{totalPrice}</div>
              </div>

              {/* checkout */}
              <div className="mt-5">
                <button
                  onClick={handlePaymentButton}
                  className="w-full p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl font-bold rounded-2xl"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
