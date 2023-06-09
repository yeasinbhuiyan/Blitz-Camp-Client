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
import ManageClasses from "../Page/Dashboard/AdminDashboard/ManageClasses";
import SelectedClass from "../Page/Dashboard/StudentDashboard/SelectedClass";
import Payment from "../Page/Dashboard/StudentDashboard/Payment/Payment";
import Enrolled from "../Page/Dashboard/StudentDashboard/Enrolled/Enrolled";
import PaymentHistory from "../Page/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";


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
            // student 
            {
                path: 'selected-classes',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'enroll',
                element: <Enrolled></Enrolled>
            },

            {
                path: 'all-payment-history',
                element: <PaymentHistory></PaymentHistory>

            },

            // instructor
            {
                path: 'add-classes',
                element: <AddClasses></AddClasses>
            },
            {
                path: 'my-classes',
                element: <MyClasses></MyClasses>
            }

            // admin

            , {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            }, {
                path: 'manage-classes',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }
])


export default router;