type language = "en.asad" | "ar" | "ar.alafasy"

export interface responseType {
    englishverse: string
    arabicverse: string
    date: Date
    id: string
}

const argInjector = (ayah: number, language: language) => {
    return `http://api.alquran.cloud/v1/ayah/${ayah}/${language}?t=${new Date().getTime()}`;
}

export default argInjector