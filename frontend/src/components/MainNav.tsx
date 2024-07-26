import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav=()=>{
    // const {loginWithRedirect}=useAuth0();
    const {loginWithPopup}=useAuth0();
    return (
        <Button variant="ghost"
        
        className="font-bold hover:text-orange-500 hover:bg-white text-1xl rounded-md" onClick={()=>loginWithPopup()}>
         Login In
        </Button>

    )
}

export default MainNav;