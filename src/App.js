import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Router/Routes/router";

function App() {
  return (
    <div>
      <div className="App ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
