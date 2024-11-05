import React from 'react';
import RootLayout from "./layout/root-layout.jsx";
import HomePage from "./pages/home.jsx";
//import NotFound from "./pages/not-found.jsx";
import LogInPage from './pages/login.jsx';
import SignUpPage from './pages/signup.jsx';
import SearchPage from './pages/search.jsx';
import CategoryPage from './pages/MovieCategory.jsx';
import NowPlaying from './pages/now-playing.jsx';
import Popular from './pages/popular.jsx';
import TopRated from './pages/top-rated.jsx';
import Upcoming from './pages/upcoming.jsx';
import MovieDetail from './pages/MovieDetail.jsx';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,

      children: [
        {
            // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
            index: true,
            element: <HomePage/>
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetail />,
        },
        {
            // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
            path: 'login',
            element: <LogInPage/>
        },
        {
          path: '/signup',
          element: <SignUpPage/>
        },
        {
          path: '/search',
          element: <SearchPage/>
        },
        {
          path: "MovieCategory",
          children: [
            {
              index: true,
              element: <CategoryPage />,
            },
            {
              path: "now-playing",
              element: <NowPlaying />,
            },
            {
              path: "popular",
              element: <Popular />,
            },
            {
              path: "top-rated",
              element: <TopRated />,
            },
            {
              path: "upcoming",
              element: <Upcoming />,
            },
          ],
        },
    ]
    
  },

])

function App() {
  return <RouterProvider router={router}/>
}
export default App;

