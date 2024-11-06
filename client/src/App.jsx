import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/product"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"


function App() {
  

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <div>header component</div>

        <Routes>
            <Route path="/auth" element={<AuthLayout/>}>
                 <Route path="login" element={<AuthLogin/>}></Route>

                <Route path="register" element={<AuthRegister/>}></Route>
            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="dashboard" element={<AdminDashboard/>}></Route>

                <Route path="products" element={<AdminProducts/>}></Route>
                <Route path="orders" element={<AdminOrders/>}></Route>
                <Route path="features" element={<AdminFeatures/>}></Route>
            </Route>
        </Routes>
      </div> 
     </>
  )
}

export default App