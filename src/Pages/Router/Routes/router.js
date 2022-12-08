import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layers/Main";
import Home from "../../Home/Home";
import InvalidPage from "../../InvalidPage/InvalidPage";
import NewsByCategory from "../../NewsByCategory/NewsByCategory";
// import AllNews from '../../Home/AllNews/AllNews'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://groups-server.vercel.app/allcategory/news"),
        element: <Home />,
      },
      {
        path: "/categories/:id",
        loader: ({ params }) =>
          fetch(`https://groups-server.vercel.app/categories/${params.id}`),
        element: <NewsByCategory />,
      },
    ],
  },
  {
    path: "*",
    element: <InvalidPage />,
  },
]);
