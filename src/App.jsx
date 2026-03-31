import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Starts from "./components/Banner/Starts";
import Cart from "./components/Cart/Cart";
import Models from "./components/Models/Models";

import Navbar from "./components/Navbar/Navbar";
import Steps from "./components/Steps/Steps";
import PricingSection from "./components/PricingSection/PricingSection";
import Transform from "./components/Transform/Transform";
import Footer from "./components/Footer/Footer";

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
      <Navbar carts={carts} />
      <Banner />
      <Starts />

      {/* tab */}
      {/* name of each tab group should be unique */}
      <div className="tabs gap-4 mt-6 justify-center space-y-6">
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
          aria-label={`cart (${carts.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>

      {/* models */}
      {activeTab === "model" ? (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      ) : (
        <Cart  carts={carts} setCarts={setCarts}/>
      )}

      {/* steps */}
      <Steps/>

      <PricingSection/>

      <Transform/>

      <Footer/>
    </>
  );
}

export default App;
