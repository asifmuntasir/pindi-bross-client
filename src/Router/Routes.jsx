import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home";
import Menu from "../pages/Menu/Menu";
import FoodOrder from "../pages/FoodOrder/FoodOrder";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <FoodOrder></FoodOrder>
            }
        ],
    },
]);