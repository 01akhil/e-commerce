import { logoutUser } from "@/store/auth-slice";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminHeader({setOpen}) {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handleLogout() {
        // dispatch(logoutUser())
        dispatch(resetTokenAndCredentials())
        sessionStorage.clear();
        navigate("/auth/login");
    }


    return ( 
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b w-[75vw]">

        <Button
            onClick={()=>setOpen(true)}
        className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex flex-1 justify-end">
            <Button onClick={(handleLogout)} className="inline-flex gap-2 items-center py-2 text-sm font-medium shadow rounded-md px-4">
            <LogOut />
            Log Out
            </Button>
        </div>
    </header>   
     );
}

export default AdminHeader
