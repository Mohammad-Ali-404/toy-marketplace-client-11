import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddToys from "../Pages/AddToys";
import AllToys from "../Pages/AllToys";
import PrivateRoute from "./PivateRoute";
import ToyTabView from "../Pages/ToyTabView";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'addtoys',
          element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/addtoy')
        },
        {
          path:'toyTabView/:id',
          element:<PrivateRoute> <ToyTabView></ToyTabView> </PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/addtoy/${params.id}`)
        }
      ]
    },
  ]);
  export default router;