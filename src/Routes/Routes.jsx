import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddIssues from "../Pages/AddIssues";
import AllIssues from "../Pages/AllIssues";
import MyIssues from "../Pages/MyIssues";
import Register from "../Pages/Register";

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
            Component: AddIssues
        },
        {
            path: '/allIssues',
            Component: AllIssues
        },
        {
            path: '/myIssues',
            Component: MyIssues
        },
        {
            path: '/register',
            Component: Register
        }
    ]
  },
]);