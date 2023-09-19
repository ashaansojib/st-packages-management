import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Payments from "../pages/payment/Payments";
import Replace from "../pages/return/Replace";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/replace',
                element: <Replace />
            }
        ]
    }
])
export default router;