import Admin from "../pages/Admin";
import { ADMIN_ROUTE, GAME_ROUTE, LOGIN_ROUTE, NOT_FOUND_PAGE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import CatalogPage from './../pages/CatalogPage';
import Auth from './../pages/Auth';
import GamePage from './../pages/GamePage';
import NotFoundPage from './../pages/NotFoundPage';
import Registration from './../pages/Registration';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: Admin,
        exact: true,
    },

];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: CatalogPage,
        exact: true,
    },
    {
        path: LOGIN_ROUTE,
        element: Auth,
        exact: true,
    },
    {
        path: REGISTRATION_ROUTE,
        element: Registration,
        exact: true,
    },
    {
        path: GAME_ROUTE + "/:id",
        element: GamePage,
        exact: true,
    },
    {
        path: NOT_FOUND_PAGE,
        element: NotFoundPage,
        exact: true,
    },
];