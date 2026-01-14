import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, MapPin, Instagram, Facebook, Star, Clock, Sparkles, ChevronRight, Quote as QuoteIcon } from 'lucide-react';
import { HOME_SERVICES, TIPS, WHATSAPP_NUMBER, STUDIO_ADDRESS } from '../constants';
import ResultsCarousel from '../components/ResultsCarousel';
import type { Service, Tip } from '../types';

interface HomeScreenProps {
    onNavigateToBooking: () => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Header: React.FC = () => (
    <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-center"
    >
        <div className="text-center">
            <h1 className="text-lg font-bold tracking-[0.2em] uppercase text-primary font-display">Pâmela Teodoro</h1>
            <p className="text-[9px] tracking-[0.4em] uppercase opacity-70 text-text-main dark:text-text-dark font-sans font-bold">Beauty Studio</p>
        </div>
    </motion.header>
);

const Hero: React.FC<{ onSchedule: () => void }> = ({ onSchedule }) => (
    <div className="px-4 py-4">
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[700px] w-full overflow-hidden rounded-[2.5rem] lux-shadow flex flex-col justify-end"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.3) 45%, rgba(10, 8, 8, 0.95) 90%), url("/hero-1.jpeg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%'
            }}
        >
            <div className="p-10 pb-14 space-y-4">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-1"
                >
                    <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase drop-shadow-md">Especialista em Olhar</span>
                    <div className="h-[1px] w-8 bg-gold/50" />
                </motion.div>

                <div className="space-y-2">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[38px] font-bold leading-[1.1] text-white font-display drop-shadow-lg"
                    >
                        Realçando sua <br /><span className="text-gold italic">beleza natural.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-white/70 font-sans text-sm leading-relaxed max-w-[280px] drop-shadow-md"
                    >
                        Design de sobrancelhas e extensões de cílios com a técnica e o carinho que você merece.
                    </motion.p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    onClick={onSchedule}
                    className="bg-gold hover:bg-gold/90 text-white font-sans font-bold px-10 py-4.5 rounded-[2rem] transition-all flex items-center justify-center gap-3 w-full sm:w-fit shadow-2xl shadow-gold/20 group text-base mt-4"
                >
                    Reservar Horário
                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    </div>
);

const ServiceIcon: React.FC<{ service: Service }> = ({ service }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="flex flex-col items-center gap-3 p-5 bg-white dark:bg-zinc-900 rounded-3xl lux-shadow border border-primary/5 cursor-pointer"
    >
        <div className="size-14 rounded-full flex items-center justify-center bg-primary/5 text-primary">
            <span className="material-symbols-outlined text-2xl">{service.icon}</span>
        </div>
        <span className="text-[11px] font-sans font-bold text-center leading-tight tracking-wide text-text-main dark:text-text-dark">{service.name}</span>
    </motion.div>
);

const TipCard: React.FC<{ tip: Tip }> = ({ tip }) => (
    <motion.div
        variants={itemVariants}
        className="group flex-none w-72 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-primary/5 lux-shadow"
    >
        <div className="h-48 w-full overflow-hidden relative">
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url("${tip.imageUrl}")` }}
            />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 text-[10px] font-bold text-gold uppercase tracking-widest rounded-full backdrop-blur-sm">
                    {tip.category}
                </span>
            </div>
        </div>
        <div className="p-6">
            <h4 className="text-lg font-bold leading-tight mb-2 text-text-main dark:text-text-dark font-display">{tip.title}</h4>
            <p className="text-xs font-sans text-gray-500 dark:text-gray-400 leading-relaxed">{tip.description}</p>
            <div className="mt-4 flex items-center text-gold text-[10px] font-bold tracking-widest uppercase cursor-pointer group-hover:gap-2 transition-all">
                Ler mais <ChevronRight className="size-3" />
            </div>
        </div>
    </motion.div>
);

const Quote: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-8 py-16 text-center"
    >
        <QuoteIcon className="size-10 text-gold/20 mx-auto mb-6" />
        <p className="italic text-xl text-primary/80 dark:text-primary/90 leading-relaxed font-display max-w-xs mx-auto">
            "A beleza é o espelho da alma cuidada com amor e excelência."
        </p>
        <div className="mt-6 h-[1px] w-12 bg-gold/30 mx-auto" />
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Pâmela Teodoro</p>
    </motion.div>
);

const Location: React.FC = () => (
    <div className="px-8 pb-16 text-center space-y-4">
        <div className="size-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-gold">location_on</span>
        </div>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Nosso Studio</h4>
        <p className="text-sm font-sans text-text-main/60 dark:text-text-dark/60 max-w-[240px] mx-auto italic">
            Rua Urbano de Paula Soares, 1435<br />
            Miguelópolis - SP
        </p>
    </div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateToBooking }) => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
            <Header />
            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Hero onSchedule={onNavigateToBooking} />

                <div className="px-6 py-8">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Especialidades</span>
                            <h3 className="text-2xl font-bold font-display">Nossos Serviços</h3>
                        </div>
                        <span className="text-primary text-[11px] font-bold tracking-widest uppercase cursor-pointer hover:text-gold transition-colors">Mais</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {HOME_SERVICES.map(service => <ServiceIcon key={service.name} service={service} />)}
                    </div>
                </div>

                <ResultsCarousel />

                <div className="py-8 bg-black/5 dark:bg-white/5">
                    <div className="px-6 mb-6">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Diário de Luxo</span>
                        <h3 className="text-2xl font-bold font-display">Dicas de Bem-Estar</h3>
                    </div>
                    <div className="flex overflow-x-auto no-scrollbar gap-6 px-6 py-2">
                        {TIPS.map((tip, idx) => <TipCard key={idx} tip={tip} />)}
                    </div>
                </div>

                <Quote />
                <Location />
            </motion.main>
        </div>
    );
};

export default HomeScreen;
