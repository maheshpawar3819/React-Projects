import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Body from "./Components/Body";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Kids from "./Components/Kids";
import Sandals from "./Components/Sandals";
import Shimmer from "./Components/Shimmer";
import { Outlet } from "react-router-dom";
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
