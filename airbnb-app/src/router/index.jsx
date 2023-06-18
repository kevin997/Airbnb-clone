import { createBrowserRouter } from 'react-router-dom';
import DefaultLayOut from '../layout/DefaultLayOut';
import GuestLayOut from '../layout/GuestLayOut';
import Login from '../pages/auth/Login';



const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayOut />,
        children: [
            {

            }
        ]
    },
    {
        path: '/',
        element: <GuestLayOut />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);


export default router;
