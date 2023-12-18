"use client";

import { usePathname } from "next/navigation";

interface MainNavProps {
    data: any;
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathName = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`,
    }));

    return (
        <nav>
            <p>Main Nav</p>
        </nav>
    );
};

export default MainNav;
