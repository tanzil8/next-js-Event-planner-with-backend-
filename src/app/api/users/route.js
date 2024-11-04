import connectDB from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";

export async function GET(request) {

    await connectDB()
    console.log('mongoDB connect');
    const users = await UserModal.find()
    return Response.json(users, {status: 200})
}
 

console.log('conneted');
export async function POST(request) {
    await connectDB();
    
    
    const obj = await request.json();
    let newUser = new UserModal(obj)
    await newUser.save()
    return Response.json(newUser, {status: 201})
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 

 
        