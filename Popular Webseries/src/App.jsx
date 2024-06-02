import { useState } from "react";
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
