import { useState } from 'react';
import './Home.css';
import { motion, transition, AnimatePresence } from "framer-motion";

export default function Home() {
    const [selectedTab, setSelectedTab] = useState();
    const tabs = [
        { label: "Astronomy Picture of the Day (APOD)" },
        { label: "Mars Rover photos" },
        { label: "ISS tracker" },
        { label: "Earth observation images" },
        { label: "Space News" },
        { label: "Upcoming Celestial Events" }
    ];

    return (
        <div className="home">
            <motion.p className="floater"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.9,
                    delay: 0.9,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>EXPLORE THE UNIVERSE</motion.p>
            <div className="nav-window">
                <nav
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <ul>
                        {tabs.map((item) => (
                            <li onClick={() => setSelectedTab(item)} key={item.label}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab ? selectedTab.label : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {selectedTab ? selectedTab.label : tabs[0].label}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    )
}