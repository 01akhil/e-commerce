const cloudinary=require('cloudinary').v2;
const multer=require('multer');

cloudinary.config({
    cloud_name:"ds0l43vlz",
    api_key:"268893126352348",
    api_secret:'nS8xIj8zGz1BhsDwECT1YrmsaB4'
})

const storage=new multer.memoryStorage();

async function imageUploadUtil(file){
    const result=await cloudinary.uploader.upload(file,
   {
     resource_type:'auto'
})
return result;
}

const upload=multer({storage});
module.exports={
    upload,imageUploadUtil
}