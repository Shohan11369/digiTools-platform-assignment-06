import "./App.css";
import Banner from "./components/Banner/Banner";
import Starts from "./components/Banner/Starts";
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
      <Models modelPromise={modelPromise} />
    </>
  );
}

export default App;
