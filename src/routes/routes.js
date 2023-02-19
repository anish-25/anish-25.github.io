import Home from "../pages/Home/Home";
import TopRated from "../pages/Top-rated/TopRated";
import Trending from "../pages/Trending/Trending";
import TvSeries from "../pages/Tv-series/TvSeries";

export const routes = [
    {
        path : '/',
        component: Home,
        module: "homepage"
    },
    {
        path : '/top-rated',
        component: TopRated,
        module: "toprated"
    },
    {
        path : '/trending',
        component: Trending,
        module: "trending"
    },
    {
        path : '/series',
        component: TvSeries,
        module: "tvseries"
    },

]