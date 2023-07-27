import { useState } from 'react'
// import { Button } from 'antd'
import { Outlet, Link } from 'react-router-dom'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'//已按需引入用不到
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Outlet  占位符，蕾仕于窗口，用来展示组件，类似于vue中的route-view   */}
      <Link to='about'>About</Link>|
      <Link to='home'>Home</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App
