"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { TrashIcon } from '@heroicons/react/24/outline'; // Importing the trash icon from Heroicons

interface verseArray {
    englishverse: string;
    arabicverse: string;
    id: string;
    date: string;
}

const getData = () => {
    return (
        JSON.parse(window.localStorage.getItem("verses")!) as Array<verseArray> ?? []
    );
};
const HistoryComponent = () => {

    const [versearray, setVersearray] = useState<verseArray[]>([]);
    useEffect(() => {
        setVersearray(getData())
    }, [])
    const handleDelete = (id: string) => {
        // Implement delete functionality (e.g., remove from localStorage or state)
        const updatedArray = versearray.filter((verse) => verse.id !== id);
        setVersearray(updatedArray);
        window.localStorage.setItem("verses", JSON.stringify(updatedArray));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <AnimatePresence>
                {versearray.map((verse) => {
                    return (
                        <motion.div
                            key={verse.id}
                            className="mt-6 p-6 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between transition-all hover:shadow-xl"
                            initial={{ opacity: 0, x: -40 }}  // Starts off-screen to the left
                            animate={{ opacity: 1, x: 0 }}     // Animates to original position
                            exit={{ opacity: 0, x: 100 }}      // Exits to the right
                            transition={{
                                duration: 0.6,               // Increase the duration for a slower, smoother end
                                // ease: "easeOut",         // Ensures smooth acceleration and deceleration
                            }}
                        >
                            <div className="flex flex-col w-full space-y-2 sm:w-2/5">
                                <p className="text-gray-500 text-sm font-medium">
                                    {new Date(verse.date).toDateString()}
                                </p>
                                <p className="text-xl font-semibold text-gray-800 break-words">
                                    {verse.arabicverse}
                                </p>
                            </div>
                            {/* Optional: You can add an English translation if available */}
                            {verse.englishverse && (
                                <p className="text-xs font-medium text-gray-700 mt-4 sm:mt-0 sm:ml-4 sm:w-3/5">
                                    {verse.englishverse}
                                </p>
                            )}

                            {/* Trash Icon to delete the verse */}
                            <div className="flex items-center lg:justify-end sm:justify-start w-1/4 mt-10" >
                                <button
                                    onClick={() => handleDelete(verse.id)}
                                    className=" text-white rounded-lg text-xs p-2 bg-black "
                                >
                                    <TrashIcon className="h-6 w-6" />
                                </button>

                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default HistoryComponent;
