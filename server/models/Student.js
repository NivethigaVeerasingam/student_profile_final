const mongoose=require('mongoose');

const StudentSchema = new mongoose.Schema(

    {
      name: {
        type: String,
        required: [true, "Please enter  name"],
      },
  
      email: {
        type:String ,
        required: true,
        
      },
  
      password: {
        type: String ,
        required: true,
        
      },
  
      
    }
    
  );
  
  
  const StudentModel= mongoose.model("st_details", StudentSchema);
  
  module.exports =StudentModel;