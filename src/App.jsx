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
          className="tab bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Cart"
          
        />
        
      </div>
      <Models modelPromise={modelPromise} />
      <Cart />
    </>
  );
}

export default App;
