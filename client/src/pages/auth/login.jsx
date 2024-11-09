import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

const initialState ={ 
    email:'',
    password:'',
    
}

function AuthLogin(){

    const [formData,setFormData]=useState(initialState)
    const dispatch=useDispatch();
    const {toast}=useToast()

    function onSubmit(e){
        e.preventDefault();

        dispatch(loginUser(formData)).then((data)=>{
            if(data?.payload?.success){
                toast({
                    title:data?.payload.message
                })
            }
            else{
                toast({
                    title:data?.payload.message,
                    variant:"destructive"
                })
            }

        })
    }

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl tracking-tight text-foreground font-bold">Log In</h1>
                <p className="mt-2">
                    Don't have an account? Create a new one
                    <Link className="font-medium text-primary hover:underline ml-2" to="/auth/register">Sign Up</Link>
                </p>
            </div>
            <CommonForm
                formControls={loginFormControls}
                buttonText={'Log In'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
                />
        </div>
    )
}

export default AuthLogin;