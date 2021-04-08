import Home from "./pages/home";
import Movies from "./pages/movies";
import MovieDetail from "./pages/movies/detail";

const routes = [
    {
        path: '/',
        exact: true,
        name: 'home',
        component: Home
    },
    {
        path: '/movies',
        exact: true,
        name: 'movies',
        component: Movies
    },
    {
        path: '/movies/:id',
        exact: true,
        name: 'movies-detail',
        component: MovieDetail
    }
];

export default routes;
