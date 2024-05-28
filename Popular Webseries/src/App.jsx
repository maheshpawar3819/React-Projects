import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Webseries from "./Components/Webseries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Webseries/>
      
    </>
  );
}

export default App;
