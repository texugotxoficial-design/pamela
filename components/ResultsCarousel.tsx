
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_RESULTS = [
    '/WhatsApp Image 2026-01-13 at 12.52.52 (1).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.52.jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.53.jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.54 (1).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.54 (2).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.54 (3).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.54 (4).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.54 (5).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.54.jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.55 (1).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.55 (2).jpeg',
    '/WhatsApp Image 2026-01-13 at 12.52.55.jpeg',
    '/WhatsApp Image 2026-01-13 at 12.59.49.jpeg'
];

const ResultsCarousel: React.FC = () => {
    // Randomize order on mount
    const shuffledResults = useMemo(() => {
        return [...ALL_RESULTS].sort(() => Math.random() - 0.5);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % shuffledResults.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [shuffledResults.length]);

    return (
        <section className="py-12 space-y-6">
            <div className="px-8 flex items-end justify-between">
                <div className="space-y-1">
                    <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">Transformações</h3>
                    <h4 className="text-3xl font-bold font-display text-text-main dark:text-white">Nossos <br /><span className="text-gold italic">Resultados</span></h4>
                </div>
            </div>

            <div className="relative h-[500px] w-full px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-x-4 inset-y-0"
                    >
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden lux-shadow group">
                            <img
                                src={shuffledResults[currentIndex]}
                                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                                alt="Resultado"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-10 left-10">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-3 drop-shadow-md"
                                >
                                    <div className="h-[2px] w-12 bg-gold" />
                                    <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white">Procedimento Real</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {shuffledResults.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-gold/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsCarousel;
