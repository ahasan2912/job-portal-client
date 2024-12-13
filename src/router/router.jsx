import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostJob from "../pages/MyPostJob/MyPostJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>Pages Not found</h1>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivetRoute><JobApply></JobApply></PrivetRoute>,
          loader: () => fetch(``)
        },
        {
          path: '/myApplications',
          element: <PrivetRoute><MyApplication></MyApplication></PrivetRoute>
        },
        {
          path: '/addjob',
          element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
        },
        {
          path: '/myPostedJobs',
          element: <PrivetRoute><MyPostJob></MyPostJob></PrivetRoute>
        },
        {
          path: '/viewApplication/:job_id',
          element: <PrivetRoute><ViewApplication></ViewApplication></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;