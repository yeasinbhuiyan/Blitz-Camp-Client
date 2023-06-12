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
import AllInstructors from "../Page/AllInstructos/AllInstructors";
import InstructorClasses from "../Page/AllInstructos/InstructorClasses";
import PrivateAdmin from "./PrivateAdmin";
import PrivateInstructor from "./PrivateInstructor";
import About from "../Page/About/About";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            }, {
                path: '/allInstructors',
                element: <AllInstructors></AllInstructors>

            },
            {
                path: '/instructor/all-class',
                element: <PrivateRoute> <InstructorClasses></InstructorClasses></PrivateRoute>
            },{
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateInstructor><AddClasses></AddClasses></PrivateInstructor>
            },
            {
                path: 'my-classes',
                element: <PrivateInstructor><MyClasses></MyClasses></PrivateInstructor>
            }

            // admin
            

            , {
                path: 'manage-users',
                element: <PrivateAdmin><ManageUsers></ManageUsers></PrivateAdmin>
            }, {
                path: 'manage-classes',
                element: <PrivateAdmin><ManageClasses></ManageClasses></PrivateAdmin>
            }
        ]
    }
])


export default router;