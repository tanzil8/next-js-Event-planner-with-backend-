import mongoose from 'mongoose';
const { Schema } = mongoose;



const eventSchema = new Schema({

title : String,
description : String,
startTime: String,
endTime : String,
startDate : String,
endDate : String,


location : {
    lat : Number,
    long : Number
},
address: String,
createdBy : {type : mongoose.Types.ObjectId, ref : 'User'},
giong: [{type : mongoose.Types.ObjectId, ref : 'User'}],

})


export const eventModal = mongoose.model('event', eventSchema);