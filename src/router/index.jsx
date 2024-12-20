import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Main from "../pages/Main";
import NowPlaying from "../pages/NowPlaying";
import Popular from "../pages/Popular";
import TopRated from "../pages/TopRated";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/now_playing",
        element: <NowPlaying />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/top_rated",
        element: <TopRated />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/:movieId",
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/myPage",
    element: <MyPage />,
  },
]);

export default router;
