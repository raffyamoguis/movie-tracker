import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useFindPath = () => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);
    return currentPath;
};

export const useRouteOnHome = () => {
    const homeRoute = [
        "/movies", "/tvshows", "/genre", "/country",
    ];

    return homeRoute.indexOf(useFindPath()) > -1;
}