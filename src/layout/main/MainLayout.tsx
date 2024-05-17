import React from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";

interface MainLayoutprops{
    isOpen: boolean;
}

const MainLayout: React.FC<MainLayoutprops> = ({
    isOpen
}) => {

    const mainClass = classNames('p-4 h-screen', {'ml-80': isOpen});

    return (
        <main className={mainClass}>
            <h1>
                MainLayout
            </h1>
            <Outlet />
        </main>
    )
}

export default MainLayout