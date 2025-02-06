import { Link } from 'react-router-dom'
import logo from '@assets/images/logo.svg'

export function Header() {
  return (
      <div className="h-[55px] flex justify-between items-center px-[60px]">
        <h1>
          <Link to="./">
            <img src={logo} alt="Logo" width="137" height="33"/>
          </Link>
        </h1>
        <nav>
          <ul className="flex">
            <li className="mx-[20px] hover:"><Link to="">HOME</Link></li>
            <li className="mx-[20px]"><Link to="">ABOUT</Link></li>
            <li className="ml-[20px]"><Link to="">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
  )
}