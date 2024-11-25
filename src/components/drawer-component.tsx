import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import ClipLoader from "react-spinners/ClipLoader";

import { Button } from "./ui/button"
import { motion } from "motion/react"
const DrawerComponent = ({ verseHandler, verse, visible, arabicverse }: { verseHandler: VoidFunction, verse: string, visible: boolean, arabicverse: string }) => {
    return (
        <Drawer>
            <DrawerTrigger onClick={verseHandler} className="ubuntu-mono-bold bg-black text-white mt-10 p-2 rounded-lg">Generate</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>This is the verse generated for you..</DrawerTitle>
                    <DrawerDescription>The english translation can be found below it.</DrawerDescription>
                </DrawerHeader>
                <div className="flex items-center justify-center">
                    <ClipLoader
                        color={"black"}
                        loading={!visible}
                        // cssOverride={override}
                        size={40}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                {
                    visible &&

                    <motion.div
                        className="flex w-full justify-center items-center flex-col"
                        initial={{ opacity: 0, x: -200 }} // Start offscreen to the left with zero opacity
                        animate={{ opacity: 1, x: 0 }}    // Fade in and slide to the center
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut" },  // Slow fade-in effect
                            x: { type: "spring", stiffness: 100, damping: 25 } // Smooth, spring-based slide-in effect
                        }}
                    >

                        <p className="m-10 noto-kufi-arabic text-2xl">{arabicverse}</p>
                    </motion.div>
                }
                {
                    visible &&

                    <motion.div
                        className="flex w-full justify-center items-center flex-col"
                        initial={{ opacity: 0, x: -200 }} // Start offscreen to the left with zero opacity
                        animate={{ opacity: 1, x: 0 }}    // Fade in and slide to the center
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut" },  // Slow fade-in effect
                            x: { type: "spring", stiffness: 100, damping: 25 } // Smooth, spring-based slide-in effect
                        }}
                    >

                        <p className="m-10">{verse}</p>
                    </motion.div>
                }
                <DrawerFooter>
                    <div className="flex items-center justify-evenly w-full ">
                        <DrawerClose>
                            <p className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2">
                                Close
                            </p>                        </DrawerClose>
                        <Button className="w-48" >Save</Button>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}
export default DrawerComponent