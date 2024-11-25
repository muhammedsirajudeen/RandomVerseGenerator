"use client"
import { AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

interface verseArray{
    englishverse:string,
    arabicverse:string,
    id:string,
    date:string
}
const getData=()=>{
    return JSON.parse(window.localStorage.getItem('verses')!) as Array<verseArray> ?? []
}
const HistoryComponent=()=>{
    const [versearray,setVersearray]=useState<verseArray[]>(getData)
    console.log(versearray)
    return(
        <AnimatePresence>
            {
            versearray.map((verse)=>{
                return(
                    <div key={verse.id} className="mt-10 flex items-center justify-evenly" >
                        <p className="w-1/4" >{new Date(verse.date).toDateString()}</p>
                        <p className="max-w-96 w-3/4 overflow-clip h-10 " >{verse.arabicverse}</p>

                    </div>
                )
            })

            }            
        </AnimatePresence>
    )
}

export default HistoryComponent