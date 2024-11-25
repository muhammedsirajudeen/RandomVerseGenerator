"use client"
// import Image from "next/image";
import { motion } from "motion/react"
import DrawerComponent from "@/components/drawer-component"
import { useState } from "react"

type language = "en.asad" | "ar"

interface responseText {
  data: {
    text: string
  }
}

export default function Home() {
  const [englishVerse, setEnglishVerse] = useState<string>("")
  const [arabicVerse, setArabicVerse] = useState<string>("")
  const [visible, setVisible] = useState<boolean>(false)
  const verseHandler = async () => {
    setVisible(false)
    const rawData = await fetch(argInjector(Math.floor(Math.random() * 6236) + 1, "en.asad"))
    const jsonData: responseText = await rawData.json()
    console.log(jsonData.data.text)
    setEnglishVerse(jsonData.data.text)
    const arabicRawData = await fetch(argInjector(Math.floor(Math.random() * 6236) + 1, "ar"))
    const arabicjsonData: responseText = await arabicRawData.json()
    setArabicVerse(arabicjsonData.data.text)
    setVisible(true)
  }

  const argInjector = (ayah: number, language: language) => {
    return `http://api.alquran.cloud/v1/ayah/${ayah}/${language}`
  }

  return (
    // <></>
    <div className="flex w-screen items-center mt-72 justify-center flex-col">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring", // for a spring-like effect
          stiffness: 100, // controls the bounciness
          damping: 25, // controls how quickly the animation settles
          duration: 1, // time for the animation to complete
        }}
        style={{ fontSize: "9vh" }}
        className="noto-kufi-arabic"
      >
        عشوائي
      </motion.h1>


      <p className="text-sm mt-10 ubuntu-mono-regular-italic">Randomly Generated Verses to ease your heart &#128420;.</p>
      <motion.div
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 }
        }}
      >
        <DrawerComponent arabicverse={arabicVerse} visible={visible} verse={englishVerse} verseHandler={verseHandler} />
      </motion.div>
    </div>
  );
}
