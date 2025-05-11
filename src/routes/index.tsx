import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Ejercicios from "../pages/Ejercicios";
import GruposMusculares from "../pages/GruposMusculares";
import Categorias from "../pages/Categorias";
import NoEncontrado from "../pages/NoEncontrado";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/ejercicios",
        element: <Ejercicios />,
    },
    {
        path: "/ejercicios/:id",
        element: <Ejercicios />,
    },
    {
        path: "/grupos-musculares",
        element: <GruposMusculares />,
    },
    {
        path: "/grupos-musculares/:id",
        element: <GruposMusculares />,
    },
    {
        path: "/categorias",
        element: <Categorias />,
    },
    {
        path: "/categorias/:id",
        element: <Categorias />,
    },
    {
        path: "*",
        element: <NoEncontrado />,
    },
]