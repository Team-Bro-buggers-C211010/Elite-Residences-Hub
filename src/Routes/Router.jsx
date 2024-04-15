import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/update-profile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
        ]
    }
])

export default router;