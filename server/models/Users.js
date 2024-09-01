const mongoose=require('mongoose');



const UserSchema = mongoose.Schema(
    {
      name: {
        type: String,
       
      },
  
      ph_no: {
        type:Number ,
        required: true,
        default: 0,
      },
      
      image : {
        type:String ,
        
      },
      
  
      
  
      
    },
    
  );
  
  
  const UserModel= mongoose.model("users", UserSchema);
  
  module.exports =UserModel;