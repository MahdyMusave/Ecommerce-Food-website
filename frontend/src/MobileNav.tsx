import { CircleUserRound, Menu } from 'lucide-react';

import React from 'react'
import { SheetTrigger,Sheet, SheetContent, SheetTitle, SheetDescription } from './components/ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './components/MobileNavLinks';

const MobileNav = () => {
    const {isAuthenticated,loginWithPopup,user}=useAuth0()
  return (
   <Sheet >
        <SheetTrigger>
            <Menu className="text-orange-500 " />
        </SheetTrigger>
        <SheetContent className="space-y-3 bg-slate-100">
            <SheetTitle>
                {isAuthenticated ?<span className='flex items-center font-bold gap-2 pt-12'>
                    <CircleUserRound className='text-orange-500' />
                    <h2 className='text-slate-500 font-bold '> {user?.email}</h2>
                </span> : <span className='text-slate-800'>Welcome to MernEats.com</span>}
               
            </SheetTitle>
            <Separator className='border border-red-300'/>
            <SheetDescription className='flex  '>
                    {
                        isAuthenticated ? (<MobileNavLinks />):
                        (<button onClick={()=>loginWithPopup()} className='flex-1 font-bold bg-orange-500'>Log In</button>)

                    } 



            </SheetDescription>
        </SheetContent>
   </Sheet>
  )
}

export default MobileNav;