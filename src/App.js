import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Router/Routes/router";

function App() {
  return (
    <div>
      <div className="App container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
