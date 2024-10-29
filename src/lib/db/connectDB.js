import mongoose from 'mongoose';
import React from 'react'

const connectDB = async () => {
    try{
        let connection ;
      
        connection = await mongoose.connect(process.env.MONGODB_URL)
   
        console.log('MongoDB Connected' );
        
    }


    catch(err){
        console.log('err in connection');
        
     
    }
  return (
<></>
  )
}

export default connectDB