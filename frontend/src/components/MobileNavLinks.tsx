import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';

 const MobileNavLinks = () => {
    const {logout}=useAuth0();
  return (
    <>
        <div className='flex flex-row justify-between  w-screen '>
            <Link to="user-profile" className="flex bg-white px-3 rounded-lg items-center font-bold hover:text-orange-500" >
                User Profile
            </Link>
            <Button className='flex justify-normal bg-slate-600 py-4 px-4 hover:bg-slate-900 border border-slate-500' onClick={()=>logout()}>Log Out</Button>
        </div>
    </>
)


}


export default MobileNavLinks;