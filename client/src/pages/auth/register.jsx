import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const initialState ={
    userName:'',
    email:'',
    password:'',
    
}



function AuthRegister(){

    const [formData,setFormData]=useState(initialState)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const{toast}=useToast()

    console.log(formData)

    function onSubmit(event){
        event.preventDefault();
        dispatch(registerUser(formData)).then((data)=>{
            console.log(data)
            if(data?.payload?.success)
            {
                toast({
                    title:"Registration successful"
                })
                navigate('/auth/login')
            }
                
            else{
                toast({
                    title: data?.payload?.message,
                    variant:"destructive"
                })
            }
        })
    }
    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl tracking-tight text-foreground font-bold">Create new account</h1>
                <p className="mt-2">
                    Already have an account?
                    <Link className="font-medium text-primary hover:underline ml-2" to="/auth/login">Log In</Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={'Sign up'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
                />
        </div>
    )
}

export default AuthRegister;