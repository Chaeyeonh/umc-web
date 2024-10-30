import './App.css'

// 1. import를 해줍니다.

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// 1. 만든 페이지들을 import
import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import RootLayout from "./layout/root-layout.jsx";

//createBrowserRouter: 브라우저에서 사용할 라우터 객체를 생성하는 함수
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
        children: [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage/>
            },
            {
                // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                path: 'movies',
                element: <Movies/>
            }
        ]
    },
   
])

//RouterProvider: 생성된 라우터 객체를 애플리케이션에 제공하는 컴포넌트
function App() {
    return <RouterProvider router={router}/>
}

export default App
