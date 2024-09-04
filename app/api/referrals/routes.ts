import { saveReferral } from "@/lib/storage";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    const {userId,referrerId} = await request.json()
    if(!userId || referrerId){
        return NextResponse.json({error: 'Missing userId or refferralId'}, {status : 400})
    }
    saveReferral(userId,referrerId)
    return NextResponse.json({success: true})
}