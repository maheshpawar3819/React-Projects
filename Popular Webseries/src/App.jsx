import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Webseries from "./Components/Webseries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Webseries
        imgsrc="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1677/1581677-t-81f48f570f37"
        title="A Hotstar Specials Series"
        sname="Special Ops"
        link="https://www.hotstar.com/in/shows/special-ops/1260022894/watch?fallbackEpisodeId=1260022902"
      />
      
    </>
  );
}

export default App;
