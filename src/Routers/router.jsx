import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/LoginAndSignUp/Login";
import SignUp from "../Page/LoginAndSignUp/SignUp";
import AllClasses from "../Page/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddClasses from "../Page/Dashboard/InstructorDashboard/AddClasses";
import MyClasses from "../Page/Dashboard/InstructorDashboard/MyClasses";
import ManageUsers from "../Page/Dashboard/AdminDashboard/ManageUsers";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }, {
                path: '/allClasses',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'add-classes',
                element: <AddClasses></AddClasses>
            },
            {
                path: 'my-classes',
                element: <MyClasses></MyClasses>
            } ,{
                path : 'manage-users',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])


export default router;