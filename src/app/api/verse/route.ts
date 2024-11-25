import { NextResponse } from "next/server";
import axios from "axios"
import axiosRetry from "axios-retry"
const argInjector = (ayah: number, language: language) => {
    return `http://api.alquran.cloud/v1/ayah/${ayah}/${language}`
}
type language = "en.asad" | "ar"

export const axiosInstance=axios.create(
    {
        timeout:300000
    }
)
axiosRetry(axiosInstance, { retries: 10, retryDelay: axiosRetry.exponentialDelay });

export async function GET():Promise<NextResponse> {
    const jsonData = await axiosInstance.get(argInjector(Math.floor(Math.random() * 6236) + 1, "en.asad"))
    const arabicjsonData = await axiosInstance.get(argInjector(Math.floor(Math.random() * 6236) + 1, "ar"))
    return NextResponse.json({ englishresponse: jsonData.data , arabicresponse:arabicjsonData.data })
}