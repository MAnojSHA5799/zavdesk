"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Sidebar from "@/components/Sidebar"
import { useCentralStore } from "@/Store"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen, setIsSidebarOpen } = useCentralStore()

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${isSidebarOpen ? 'overflow-hidden' : ''} h-screen`}
        >

            {/* Backdrop */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                        className="absolute md:hidden z-30 top-0 left-0"
                    >
                        <Sidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Layout */}
            <div className="grid md:grid-cols-[240px_1fr] w-full h-full overflow-hidden">

                {/* Desktop Sidebar */}
                <div className="hidden md:block h-full">
                    <Sidebar />
                </div>

                {/* RIGHT SIDE CONTENT – FIXED WIDTH */}
                <div className="w-full h-full overflow-y-auto overflow-x-hidden px-0 py-0 bg-[#F7F7F7]">
                    {children}
                </div>

            </div>

        </motion.div>
    )
}

export default AppLayout
