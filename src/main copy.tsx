//组件路由
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

//初始化样式
import 'reset-css'

//全局样式
import './assets/styles/global.scss'

import Router from '@/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
