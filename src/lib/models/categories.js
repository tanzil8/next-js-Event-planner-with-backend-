import { Type } from 'lucide-react';
import mongoose from 'mongoose';
const { Schema } = mongoose;



const CategotiesSchema = new Schema({

title : String,
description : String,
thumbnail: String,







})


export const CategotiesModal = mongoose.model('Categoties', CategotiesSchema);