import { Children } from "react"
import  Header  from "../components/ui/Header";

type Props={
    children:React.ReactNode;
}

const Layout=({children}:Props)=>{
    return(
    
       <>
            <div className=" flex flex-col min-h-screen border border-red-500 w-screen">

                 
                    <Header />
                    <div className="container mx-auto flex-1 py-10 text-slate-500">
                      {children}
                    </div>
            </div>
       </>
    )
}

export default Layout;