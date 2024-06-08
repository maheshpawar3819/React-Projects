import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
