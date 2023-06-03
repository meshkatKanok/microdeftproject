import AllProduct from "../AllProduct/AllProduct";
import Form from "../Form/Form";
import Home from "../Home/Home";
import Navbar from "../Navbar";

const { createBrowserRouter } = require("react-router-dom");


export const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/addProduct',element:<Form/>}
])

