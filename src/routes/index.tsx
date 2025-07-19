import MainLayout from "@/layout/MainLayout";
import contact from "@/pages/contact/contact";
import Home from "@/pages/Home/Home";
import Tasks from "@/pages/Tasks/Tasks";
import {
  createBrowserRouter,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>Not Found</h1>,
    children:[
      {
        index:true,
        Component: Home 
      },
      {
        path:"contact",
        Component: contact
      },
      {
        path:"tasks",
        Component:Tasks
      }
    ]
  },
]);

export default router