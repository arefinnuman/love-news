import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);
