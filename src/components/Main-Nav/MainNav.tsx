import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings'

export const MainNav = () => {
  return (
    <nav className='flex flex-row justify-around w-full p-2 text-[#FFF] text-2xl'>
      <Link className='hover:text-[#a11a1a]' to='/'>
        Home
      </Link>
      <Link className='hover:text-[#a11a1a]' to='/saved-fortunes'>
        Saved Fortunes
      </Link>
      <Link className='hover:text-[#a11a1a]' to='/settings'>
        <SettingsIcon />
      </Link>
    </nav>
  )
}
