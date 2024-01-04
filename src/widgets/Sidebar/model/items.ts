import React from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import HomeIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig';

export type SidebarItemType = {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.home,
        text: 'Home',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'About us',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
    },
];
