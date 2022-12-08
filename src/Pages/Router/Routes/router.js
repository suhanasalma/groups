import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layers/Main";
import Home from "../../Home/Home";
import InvalidPage from "../../InvalidPage/InvalidPage";
// import AllNews from '../../Home/AllNews/AllNews'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/allcategory/news"),
        element: <Home />,
      },
      // {
      //   path: "/allnews",
      //   element: <AllNews />,
      // },
    ],
  },
  {
    path: "*",
    element: <InvalidPage />,
  },
]);