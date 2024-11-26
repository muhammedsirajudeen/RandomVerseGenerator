import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/helper/axiosInstance";
import axiosRetry from "axios-retry"
import argInjector from "@/helper/verseHelper";


axiosRetry(axiosInstance, { retries: 10, retryDelay: axiosRetry.exponentialDelay });

export async function GET(request:NextRequest): Promise<NextResponse> {
    const url=request.nextUrl
    const verse=parseInt(url.searchParams.get('verse') as string)
    const jsonData = await axiosInstance.get(argInjector(verse, "en.asad"))
    const arabicjsonData = await axiosInstance.get(argInjector(verse, "ar"))
    const audioUrl= await axiosInstance.get(argInjector(verse,"ar.alafasy"))
    return NextResponse.json({ englishresponse: jsonData.data, arabicresponse: arabicjsonData.data,audioresponse:audioUrl.data.data.audio })
}