import { Link } from 'react-router-dom'

export const MainNav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/settings'>Settings</Link>
    </nav>
  )
}
