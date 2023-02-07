import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    Home = 'home',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Home]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Home]: {
        path: RoutePath[AppRoutes.Home],
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
};
