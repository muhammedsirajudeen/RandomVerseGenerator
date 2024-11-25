import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/helper/axiosInstance";
import axiosRetry from "axios-retry"
const argInjector = (ayah: number, language: language) => {
    return `http://api.alquran.cloud/v1/ayah/${ayah}/${language}?t=${new Date().getTime()}`;
}
type language = "en.asad" | "ar"


axiosRetry(axiosInstance, { retries: 10, retryDelay: axiosRetry.exponentialDelay });

export async function GET(request:NextRequest): Promise<NextResponse> {
    const url=request.nextUrl
    const verse=parseInt(url.searchParams.get('verse') as string)
    const jsonData = await axiosInstance.get(argInjector(verse, "en.asad"))
    const arabicjsonData = await axiosInstance.get(argInjector(verse, "ar"))
    return NextResponse.json({ englishresponse: jsonData.data, arabicresponse: arabicjsonData.data })
}