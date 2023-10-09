import { NextResponse } from "next/server";


export async function GET(request, content){
    const studentDetails = content.params.student
    return new NextResponse(JSON.stringify({result:studentDetails }))
}
