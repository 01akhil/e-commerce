export const registerFormControls=[
    {
    name: 'userName',
    label:'Username',
    placeholder:'Enter your name',
    componentType: 'input',
    type:'text',   
},

{
    name: 'email',
    label:'Email',
    placeholder:'Enter your email',
    componentType: 'input',
    type:'email',   
},

{
    name: 'password',
    label:'Password',
    placeholder:'Enter your password',
    componentType: 'input',
    type:'password',   
},
]



export const loginFormControls=[


{
    name: 'email',
    label:'Email',
    placeholder:'Enter your email',
    componentType: 'input',
    type:'email',   
},

{
    name: 'password',
    label:'Password',
    placeholder:'Enter your password',
    componentType: 'input',
    type:'password',   
},
]

export const adminSidebarMenuItems=[
    {
        id:'dashboard',
        label:'Dashboard',
        path:'/admin/dashboard',
        icons:<LayoutDashboard />
    },
    {
        id:'products',
        label:'Products',
        path:'/admin/products',
        icons:<ShoppingBasket />
    },
    {
        id:'orders',
        label:'Orders',
        path:'/admin/orders',
        icons:<ListOrdered />
    }
]