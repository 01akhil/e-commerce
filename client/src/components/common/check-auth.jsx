import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({isAuthenticated,user, children}) {
    
    const location=useLocation()
    if(!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        return<Navigate to ="/auth/login"/>
    }
    
    else if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if(user?.role==="admin"){
            return<Navigate to="/admin/dashboard"/>
        }
        else{
            return <Navigate to="/shop/home"/>
        }
    }

    
    else if (isAuthenticated && user?.role!=="admin" && location.pathname.includes('/admin')){
            return<Navigate to={"/unauth-page"}/> 
    }

    else if (isAuthenticated && user?.role==="admin" && location.pathname.includes('/shop')){
        return<Navigate to={"/admin/dashboard"}/> 
}

    return <>
    {children}
    </>
}

    

export default CheckAuth;

