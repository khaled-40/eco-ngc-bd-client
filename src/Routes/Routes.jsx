import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddIssues from "../Pages/AddIssues";
import AllIssues from "../Pages/AllIssues";
import MyIssues from "../Pages/MyIssues";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyContributions from "../Pages/MyContributions";
import Login from "../Pages/Login";
import IssueDetails from "../Pages/IssueDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path:'/addIssues',
            element: <PrivateRoute><AddIssues></AddIssues></PrivateRoute>
        },
        {
            path: '/allIssues',
            Component: AllIssues
        },
        {
            path: '/myIssues',
            element: <PrivateRoute><MyIssues></MyIssues></PrivateRoute>
        },
        {
            path: '/myContribution',
            element: <PrivateRoute><MyContributions></MyContributions></PrivateRoute>
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path:'/logIn',
            Component: Login
        },
        {
            path: '/issueDetails/:id',
            loader: ({params}) => fetch(`http://localhost:3000/issues/${params.id}`),
            element: <PrivateRoute><IssueDetails>P</IssueDetails></PrivateRoute>
        }
    ]
  },
]);