import { createBrowserRouter } from "react-router";
import Display from "../components/Display.jsx";
import AddData from '../components/AddData.jsx'
import Update from "../components/Update.jsx";

const router= createBrowserRouter([
    {
        path: "/movies",
        element: <Display />,
    },
    {
        path: "/",
        element: <AddData/>
    },
    {
        path: "/update-movies/:id",
        element: <Update />,
    },
])

export default router;