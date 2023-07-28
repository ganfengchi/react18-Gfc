import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import routes from '@/router'
import 'antd/dist/antd.css'
import { message } from 'antd'

function ToPage1() {
  let navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/page1')
  }, [])
  return <div></div>
}
function ToLogin() {
  let navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/login')
    message.warning('请登录')
  }, [])
  return <div></div>
}

/** 
 * 
 * 1.如果访问的是登录页并且有token就跳转到首页
 * 2.如果访问的不是登录页，并且没有token就跳转珠岙登录页
 * 3.其余的都可以正常执行
 */
function BeforeRorter() {

  const outlet = useRoutes(routes)
  const location = useLocation()
  let token = localStorage.getItem('token')

  if (location.pathname === '/login' && token) {
    return <ToPage1 />
  }
  if (location.pathname !== '/login' && !token) {
    return <ToLogin />
  }

  return outlet
}

function App() {
  return (
    <div>
      {/* Outlet  占位符，蕾仕于窗口，用来展示组件，类似于vue中的route-view   */}
      {/* <Link to='home'>Home</Link>|
      <Link to='about'>About</Link>|
      <Link to='user'>User</Link> */}

      <BeforeRorter/>
      {/* {outlet} */}
    </div>
  )
}

export default App
