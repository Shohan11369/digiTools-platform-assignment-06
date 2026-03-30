import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Starts from "./components/Banner/Starts";
import Cart from "./components/Cart/Cart";
import Models from "./components/Models/Models";

import Navbar from "./components/Navbar/Navbar";

const getModels = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  // model & cart

  const [activeTab, setActiveTab] = useState("model");

  const [carts, setCarts]= useState([])
  // console.log(carts)

  return (
    <>
      <Navbar />
      <Banner />
      <Starts />

      {/* tab */}
      {/* name of each tab group should be unique */}
      <div className="tabs gap-4 tabs-box mt-4 justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-xl ${
            activeTab === "model"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : ""
          }`}
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-xl ${
            activeTab === "Cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : ""
          }`}
          aria-label="Cart"
          onClick={() => setActiveTab("Cart")}
        />
      </div>
      {activeTab === "model" ? (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      ) : (
        <Cart  carts={carts}/>
      )}
    </>
  );
}

export default App;
