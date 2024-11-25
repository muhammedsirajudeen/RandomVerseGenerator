"use client"
import { motion } from "motion/react"
import DrawerComponent from "@/components/drawer-component"
import { useState } from "react"
import { axiosInstance } from "@/helper/axiosInstance"
interface responseText {
  data: {
    text: string
  }
}
interface supersededResponse {
  englishresponse: responseText,
  arabicresponse: responseText
}

export default function Home() {
  const [englishVerse, setEnglishVerse] = useState<string>("")
  const [arabicVerse, setArabicVerse] = useState<string>("")
  const [visible, setVisible] = useState<boolean>(false)
  const verseHandler = async () => {
    setVisible(false)
    const jsonData: supersededResponse = (await axiosInstance.get(`api/verse?verse=${Math.floor(Math.random() * 6236) + 1}`, {
      headers: {
        'Cache-Control': 'no-store',  // Prevents caching of the response
        'Pragma': 'no-cache',         // For HTTP/1.0 compatibility
        'Expires': '0',               // Set expiry to the past
      }
    })).data;
    console.log(jsonData)
    setEnglishVerse(jsonData.englishresponse.data.text)
    setArabicVerse(jsonData.arabicresponse.data.text)
    setVisible(true)
  }


  return (
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
