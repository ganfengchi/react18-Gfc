import React, { lazy } from 'react'
import Home from '@/view/home'
import Login from '@/view/Login'
//路由懒加载

//Navigate重定向组件
import { Navigate } from 'react-router-dom'

// const About = lazy(() => import('@/view/about'))
// const User = lazy(() => import('@/view/user'))
const Page1 = lazy(() => import('@/view/page1'))
const Page2 = lazy(() => import('@/view/page2'))
const Page301 = lazy(() => import('@/view/page301'))
// Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition
//懒加载的模式需要我们添加一个loading组件
//懒加载的写法需要在外面套一层Loading组件

//抽离组件
const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}
const routes = [
    //嵌套路由 开始
    {
        path: "/",
        element: <Navigate to='/page1' />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            }
        ]
    },

    {
        path:"/login",
        element: <Login  />
    },
    {
        path:"*",//重定向到page1
        element: <Navigate to='/page1' />
    }
]
export default routes