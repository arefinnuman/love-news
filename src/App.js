import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Public/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}> </RouterProvider>
    </div>
  );
}

export default App;
