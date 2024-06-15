import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../views/Home";
import Detail from "../views/Detail";
import { Error404 } from "../views/Error404";
import { Profile } from "../views/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: "/detail/:eventId",
        element: <Detail />
    },
    {
        path: "/profile",
        element: <Profile />,
        children: [
            {
                path: "my-info",
                element: <div>My Info</div>
            },
            {
                path: "my-events",
                element: <div>My Events</div>
            }
        ]
    }
]);

const MyRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MyRoutes