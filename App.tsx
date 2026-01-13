
import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import ContactScreen from './screens/ContactScreen';
import BottomNav from './components/BottomNav';

type Screen = 'home' | 'booking' | 'contact';

const App: React.FC = () => {
    const [screen, setScreen] = useState<Screen>('home');

    const navigateToBooking = useCallback(() => {
        setScreen('booking');
        window.scrollTo(0, 0);
    }, []);

    const navigateToHome = useCallback(() => {
        setScreen('home');
        window.scrollTo(0, 0);
    }, []);

    const navigateToContact = useCallback(() => {
        setScreen('contact');
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-[430px] mx-auto shadow-2xl min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
            <main className="pb-24">
                <AnimatePresence mode="wait">
                    {screen === 'home' && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <HomeScreen onNavigateToBooking={navigateToBooking} />
                        </motion.div>
                    )}
                    {screen === 'booking' && (
                        <motion.div
                            key="booking"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <BookingScreen onNavigateBack={navigateToHome} />
                        </motion.div>
                    )}
                    {screen === 'contact' && (
                        <motion.div
                            key="contact"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <ContactScreen />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <BottomNav
                activeScreen={screen}
                onNavigateToHome={navigateToHome}
                onNavigateToBooking={navigateToBooking}
                onNavigateToContact={navigateToContact}
            />
        </div>
    );
};

export default App;
