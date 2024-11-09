import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { LogOut } from "lucide-react";
function AdminHeader() {
    return ( 
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b w-[81vw]">

        <Button className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex flex-1 justify-end">
            <Button className="inline-flex gap-2 items-center py-2 text-sm font-medium shadow rounded-md px-4">
            <LogOut />
            Log Out
            </Button>
        </div>
    </header>   
     );
}

export default AdminHeader
