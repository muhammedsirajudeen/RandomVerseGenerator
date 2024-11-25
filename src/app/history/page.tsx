"use client"
import HistoryComponent from "@/components/HistoryComponent"
import { motion } from "motion/react"
const HistoryPage = () => {
    return (
        <div className="flex items-center flex-col justify-center w-screen ">
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
                className="noto-kufi-arabic text-center w-full mt-10"
            >
                تاريخ
            </motion.h1>
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring", // for a spring-like effect
                    stiffness: 100, // controls the bounciness
                    damping: 25, // controls how quickly the animation settles
                    duration: 1, // time for the animation to complete
                }}
                // style={{ fontSize: "9vh" }}
                className="text-xs font-bold"
            >
                HISTORY.
            </motion.h1>
            <motion.div>
                <HistoryComponent/>
            </motion.div>
        </div>
    )
}

export default HistoryPage