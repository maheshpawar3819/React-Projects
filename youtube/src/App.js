import { Provider } from "react-redux";
import Body from "./Components/Body/Body";
import Head from "./Components/Head/Head";
import "./index.css";
import store from "./Utils/Store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./Components/Body/Maincontainer";
import WatchPage from "./Components/Body/watchpage/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
