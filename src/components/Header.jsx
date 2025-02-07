import { Link } from 'react-router-dom'
import logo from '@assets/images/logo.svg'

export function Header() {
  return (
      <div className="h-[80px] flex justify-between items-center px-4 sm:px-8 md:px-[60px] border-b-2">
        <h1>
          <Link to="./">
            <img src={logo} alt="Logo" className="w-24 h-auto sm:w-32 md:w-[137px]"/>
          </Link>
        </h1>
        <nav>
          <ul className="flex text-sm sm:text-base">
            <li className="ml-4 sm:ml-6 md:ml-[40px] hover:text-gray-600 transition-all duration-300 font-bold"><Link to="">HOME</Link></li>
            <li className="ml-4 sm:ml-6 md:ml-[40px] hover:text-gray-600 transition-all duration-300 font-bold"><Link to="">ABOUT</Link></li>
            <li className="ml-4 sm:ml-6 md:mx-[40px] hover:text-gray-600 transition-all duration-300 font-bold"><Link to="">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
  )
}