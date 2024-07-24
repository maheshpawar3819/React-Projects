import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
      {/* <Body /> */}

      {/* 
    <Mens/>
    <Womens/>
    <Kids/>
    <Sandals/> */}
      {/* <Shimmer /> */}
    </>
  );
}

export default App;
