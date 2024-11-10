import ProductFilter from "@/components/shopping-view/filter";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { sortOptions } from "@/config";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "@/store/admin/products-slice";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";

function ShoppingListing() {

    const dispatch=useDispatch();
    const {productList}=useSelector(state=> state.shopProducts)

    useEffect(()=>{
        dispatch(fetchAllFilteredProducts())
    },[dispatch])

console.log(productList,"prod list")


    return (  
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-5 p-4 md:p-6">
            <ProductFilter/>
        
            <div className="bg-background w-full rounded-lg shadow-sm">
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-extrabold">All Products</h2>
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground">10 Products</span>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <ArrowUpDownIcon className="h-4 w-4"/>
                                <span>Sort by</span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-[200px]">

            

                        <DropdownMenuRadioGroup >
                  {sortOptions.map(sortItem => 
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                    {sortItem.label}
                    </DropdownMenuRadioItem>
                  )}
                </DropdownMenuRadioGroup>
                        </DropdownMenuContent>

                    </DropdownMenu>
                    </div>
                   
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    
                       
                       { 
                       productList  && productList.length>0 ?
                        productList.map(productItem=><ShoppingProductTile key={productItem.id} product={productItem}/>) : null
                    }
            
                </div>
            </div>
        
        </div>

        
    );
}

export default ShoppingListing;