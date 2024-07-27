import { useAuth0 } from '@auth0/auth0-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Separator } from '@radix-ui/react-separator';
import { CircleUserRound } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

 const UsernameMenu = () => {
    const {user,logout}=useAuth0();
  return (
   <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-orange-500 gap-2'>
            <CircleUserRound className='text-orange-500' />
            {
                user?.email
            }
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" px-4 border border-slate-300">
            <DropdownMenuItem >
                <Link to="/user-profile" className='font-bold hover:text-orange-500'>
                    User Profile
                </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem >
                <Button className='flex flex-1 font-bold bg-orange-500 rounded-lg' onClick={()=>{
                    logout()
                }} 
                    
                >
                    Log Out
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
   </DropdownMenu>
  )
}


export default UsernameMenu;