import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layers/Main";
import Home from "../../Home/Home";
import InvalidPage from "../../InvalidPage/InvalidPage";

export const router =  createBrowserRouter([
   {
      path:"/",
      element:<Main/>,
      children:[
         {
            path:'/',
            element:<Home/>
         }
      ]
   },
   {
      path:'*',
      element:<InvalidPage/>

   }
]);