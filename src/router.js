import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Admin = lazy(() => import("./pages/Admin/Admin"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: 'admin',
                element: <Admin />
            }
        ]
    }
]);