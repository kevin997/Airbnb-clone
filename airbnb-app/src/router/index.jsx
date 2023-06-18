import { createBrowserRouter } from 'react-router-dom';
import DefaultLayOut from '../layout/DefaultLayOut';
import GuestLayOut from '../layout/GuestLayOut';
import Login from '../pages/auth/Login';
import Error404 from '../pages/error/Error404';
import Links from '../pages/home/Links';



const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayOut />,
        children: [

        //A ne pas supprimer pour l'instant
            {
                path: '/',
                element: <Links />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayOut />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: '*',
        element: <Error404 />
    }
]);


export default router;
