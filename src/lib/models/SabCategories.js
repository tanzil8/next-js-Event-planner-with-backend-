        
import mongoose from 'mongoose';

const { Schema } = mongoose;



const SubCategotiesSchema = new Schema({

title : String,
description : String,
thumbnail: String,


categories:{type: mongoose.Types.ObjectId , ref : 'Categoties'}



})


export const SubCategotiesModal = mongoose.model('SubCategoties', SubCategotiesSchema);


