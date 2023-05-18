import { createBrowserRouter } from "react-router-dom";

import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import Register from './pages/registration'
import ImportData from "./pages/import-data/import-data";
import ImportDataCode from "./pages/import-data/import-code";
import ImportDataTutorial from "./pages/import-data/import-tutorial";

import Layout from "./components/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "register",
        element: <Register/>,
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "importar-dados",
                element: <ImportData/>,
            },
            {
                path: "importar-dados-codigo",
                element: <ImportDataCode/>,
            },
            {
                path: "importar-dados-tutorial",
                element: <ImportDataTutorial/>,
            },
            {
                path: "dashboard",
                element: <Dashboard/>,
            },
        ]
    },
]);

export default router;
