import { user } from "@/utils/db";
import { NextResponse } from "next/server";

// Making GET api to fetch single user details
export  function GET(request, content){
    const userData  = user.filter((item)=>item.id == content.params.id)
   
   if(userData.length === 0){
    const response = {
        result: "No result found",
        success: false
    }
    return new NextResponse(JSON.stringify(response),{status: 200})
   }

   else{
    const response = {
        ...userData[0],
        success: true
    }
    return new NextResponse(JSON.stringify(response),{status:200})
   }
}


// Making PUT Api to update single user details

export async function PUT(request, content){
    let payload = await request.json();
    
    payload.id = content.params.id
    console.log(payload)
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        
return new NextResponse(JSON.stringify({result: " Error occurred, So Please provide correct credentials"} ))
    }
   else{
  
    return new NextResponse(JSON.stringify(payload), {status: 200})
   }
       
    

 
}

// Making DELETE api to remove the user

export function DELETE( request, content){

    let id  = content.params.id
    if(id){
        return new NextResponse(JSON.stringify({result : "User deleted"}), {status: 200})
    }
    else{
        return new NextResponse(JSON.stringify({result: "Error while deleting, Please try again"}), {status: 401})
    }

}