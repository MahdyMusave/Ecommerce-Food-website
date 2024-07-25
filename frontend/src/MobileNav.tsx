import { Menu } from 'lucide-react';

import React from 'react'
import { SheetTrigger,Sheet, SheetContent, SheetTitle, SheetDescription } from './components/ui/sheet';
import { Separator } from '@radix-ui/react-separator';

const MobileNav = () => {
  return (
   <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>
                    Welcome to MernEats.com
                </span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className='flex'>
                <button className='flex-1 font-bold bg-orange-500'>
                    log In
                </button>
            </SheetDescription>
        </SheetContent>
   </Sheet>
  )
}

export default MobileNav;