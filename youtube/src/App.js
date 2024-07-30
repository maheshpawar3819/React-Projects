import { Provider } from "react-redux";
import Body from "./Components/Body/Body";
import Head from "./Components/Head/Head";
import "./index.css";
import store from "./Utils/Store/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
