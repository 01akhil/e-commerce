import { Fragment } from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { adminSidebarMenuItems } from "@/config";

function MenuItems(){
   return
   <nav className="=mr">
      {
         adminSidebarMenuItems.map(menuItems=>
            <div className="flex items-center gap-2 rounded-md px-3 py-2">
               
            </div>
         )
      }
   </nav>
}
function AdminSideBar() {

   const navigate=useNavigate()

    return ( 
        <Fragment>
         <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
            <div
            onClick={()=>navigate("/admin/dashboard")}
            className="flex items-center gap-2 cursor-pointer">
            <ChartNoAxesCombined size={40}/>
                  <h6 className="font-bold">Admin panel</h6>
            </div>
         </aside>
        </Fragment>
     );
}

export default AdminSideBar
