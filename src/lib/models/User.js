import mongoose from 'mongoose';
const { Schema } = mongoose;



const userSchema = new Schema({

fullname : String,
email : String,


location : {
    lat : Number,
    long : Number
},
profileImg : String,
address: String,
bio: String

})


export const UserModal = mongoose.models.User ||    mongoose.model('User', userSchema);