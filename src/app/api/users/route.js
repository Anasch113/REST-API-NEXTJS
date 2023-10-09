import { NextResponse } from "next/server";
import { user } from "@/utils/db";

// GET api  to fetch user data from db.js
export async function GET(){
    const data = user;
   return new NextResponse(JSON.stringify(data),{status: 201})
}

// POST api to submit data (body) through input form on UI
export  async function POST(request){
    let payload = await request.json()
    console.log(payload.name)
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result: "not found"})
    }
    return NextResponse.json({result: "User created", success:true} , {status : 201})
}