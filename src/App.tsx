import { useRoutes } from 'react-router-dom'
import routes from '@/router'

function App() {
  const outlet = useRoutes(routes)
  return (
    <div>
      {/* Outlet  占位符，蕾仕于窗口，用来展示组件，类似于vue中的route-view   */}
      {/* <Link to='home'>Home</Link>|
      <Link to='about'>About</Link>|
      <Link to='user'>User</Link> */}
      {outlet}
    </div>
  )
}

export default App
