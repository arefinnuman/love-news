import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/category/:id", element: <Category></Category> },
      { path: "news/:id", element: <News></News> },
    ],
  },
]);
