import { NextResponse } from "next/server";
import { axiosInstance } from "@/helper/axiosInstance";
import axiosRetry from "axios-retry"
const argInjector = (ayah: number, language: language) => {
    return `http://api.alquran.cloud/v1/ayah/${ayah}/${language}?t=${new Date().getTime()}`;
}
type language = "en.asad" | "ar"


axiosRetry(axiosInstance, { retries: 10, retryDelay: axiosRetry.exponentialDelay });

export async function GET(): Promise<NextResponse> {
    const randomNumber=Math.floor(Math.random() * 6236) + 1
    const jsonData = await axiosInstance.get(argInjector(randomNumber, "en.asad"))
    const arabicjsonData = await axiosInstance.get(argInjector(randomNumber, "ar"))
    return NextResponse.json({ englishresponse: jsonData.data, arabicresponse: arabicjsonData.data })
}