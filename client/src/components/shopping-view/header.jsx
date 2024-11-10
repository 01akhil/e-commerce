import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { SheetTrigger,Sheet,SheetContent } from "../ui/sheet";
import { Button} from "../ui/button";
import { Label } from "../ui/label";
import { Menu,ShoppingCart,UserCog,LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { useLocation,useSearchParams } from "react-router-dom";
import { fetchCartItems } from "@/store/shop/cart-slice";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu";
  
  import UserCartWrapper from "./cart-wrapper";

  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logoutUser } from "@/store/auth-slice";

function MenuItems() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
  
    function handleNavigate(getCurrentMenuItem) {
      sessionStorage.removeItem("filters");
      const currentFilter =
        getCurrentMenuItem.id !== "home" &&
        getCurrentMenuItem.id !== "products" &&
        getCurrentMenuItem.id !== "search"
          ? {
              category: [getCurrentMenuItem.id],
            }
          : null;
  
      sessionStorage.setItem("filters", JSON.stringify(currentFilter));
  
      location.pathname.includes("listing") && currentFilter !== null
        ? setSearchParams(
            new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
          )
        : navigate(getCurrentMenuItem.path);
    }
  
    return (
      <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {shoppingViewHeaderMenuItems.map((menuItem) => (
          <Label
            onClick={() => handleNavigate(menuItem)}
            className="text-sm font-medium cursor-pointer"
            key={menuItem.id}
          >
            {menuItem.label}
          </Label>
        ))}
      </nav>
    );
  }

function HeaderRightContent() {
    const { user } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.shopCart || {}); // Add fallback to avoid destructuring undefined
    const [openCartSheet, setOpenCartSheet] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logoutUser());
    }

    useEffect(() => {
        if (user?.id) {
            dispatch(fetchCartItems(user.id));
        }
    }, [dispatch, user]);

    console.log(cartItems, "sangam");

    return (
        <div className="flex lg:items-center lg:flex-row flex-col gap-4">
            <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
                <Button
                    onClick={() => setOpenCartSheet(true)}
                    variant="outline"
                    size="icon"
                    className="relative"
                >
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
                        {cartItems?.items?.length || 0}
                    </span>
                    <span className="sr-only">User cart</span>
                </Button>
                <UserCartWrapper
                    setOpenCartSheet={setOpenCartSheet}
                    cartItems={
                        cartItems && cartItems.items && cartItems.items.length > 0
                            ? cartItems.items
                            : []
                    }
                />
            </Sheet>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="bg-black">
                        <AvatarFallback className="bg-black text-white font-extrabold">
                            {user?.userName[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-56">
                    <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/shop/account")}>
                        <UserCog className="mr-2 h-4 w-4" />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

function ShoppingHeader() {

    const {isAuthenticated}=useSelector(state=>state.auth)

    return ( 
        <header className="sticky top-0 z-40 w-full border-bottom bg-background h-10 mb-4 ">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link to="/shop/home" className="flex items-center gap-2">
                
                <House className="w-6 h-6" style={{ color: 'black' }}/>
                <span className="font-bold text-black">E-commerce</span>
                </Link>

                <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems/>
            <HeaderRightContent/>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:block">
            <MenuItems className="text-black"/>
        </div>
        {
            isAuthenticated ? <div className="hidden lg:block">
                    <HeaderRightContent/>
            </div> : null
        }
            </div>
        </header>
     );
}

export default ShoppingHeader;




