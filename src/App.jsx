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
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      {/* if  model tab then  Banner & Starts */}
      {activeTab === "model" && (
        <>
          <Navbar carts={carts} />
          <Banner />
          <Starts />
        </>
      )}

      {/* Tabs  Products & Cart  */}
      <div className="text-center mt-4 mb-6 space-y-4 p-6">
        <h2 className="font-bold text-xl">Premium Digital Tools</h2>
        <p className="text-sm">
          Choose from our curated collection of premium digital products <br />
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs Controller */}
        <div className="tabs gap-4 mt-6 justify-center flex">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-xl ${
              activeTab === "model"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : ""
            }`}
            aria-label="Products"
            checked={activeTab === "model"}
            onChange={() => setActiveTab("model")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-xl ${
              activeTab === "Cart"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : ""
            }`}
            aria-label={`Cart (${carts.length})`}
            checked={activeTab === "Cart"}
            onChange={() => setActiveTab("Cart")}
          />
        </div>
      </div>

      {/* condition */}
      {activeTab === "model" ? (
        <>
          {/* if click product tap then show these */}
          <Models
            modelPromise={modelPromise}
            carts={carts}
            setCarts={setCarts}
          />
          <Steps />
          <PricingSection />
          <Transform />
          <Footer />
        </>
      ) : (
        <>
          {/* if tab cart then show only carts section */}
          <Cart carts={carts} setCarts={setCarts} />
        </>
      )}
    </>
  );
}

export default App;
