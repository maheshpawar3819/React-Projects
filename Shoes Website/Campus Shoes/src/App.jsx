import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet/>
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
