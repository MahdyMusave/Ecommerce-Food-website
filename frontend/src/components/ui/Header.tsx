import React from 'react'
import {Link} from "react-router-dom";
import MobileNav from '../../MobileNav';
 const Header = () => {
  return (
    <div className='border-b-2 border-b-orange-500 py-6'>
        <div className='container '>
          <Link to="/" className='text-3xl font-bold tracking-tight text-orange-500'>
            MahdyMusave .com
          </Link>
          <div className='md:hidden'>
             <MobileNav />
          </div>
        </div>
    </div>
  )
}
export default Header