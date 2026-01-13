
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, MapPin, Star, ChevronRight, Award } from 'lucide-react';
import { WHATSAPP_NUMBER, STUDIO_ADDRESS } from '../constants';

const ContactScreen: React.FC = () => {
    const handleWhatsApp = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá Pâmela! Vi o seu studio no app e gostaria de tirar uma dúvida.`, '_blank');
    };

    const handleInstagram = () => {
        window.open('https://www.instagram.com/pamelateodorobeauty/', '_blank');
    };

    const handleMaps = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
            {/* Hero Section */}
            <div className="relative h-[550px] overflow-hidden rounded-[2.5rem] lux-shadow flex flex-col justify-end">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("/pamela.jpeg")`,
                        backgroundPosition: 'center 20%'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-10 pb-12 space-y-3">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 text-gold drop-shadow-md"
                    >
                        <Award className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Fundadora & Especialista</span>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[36px] font-bold font-display text-white drop-shadow-lg leading-tight"
                    >
                        Pâmela Teodoro
                    </motion.h1>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-8 mt-8 space-y-12"
            >
                {/* Bio Section */}
                <section className="space-y-4">
                    <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Minha Missão</h3>
                    <p className="text-sm font-sans text-text-main/70 dark:text-text-dark/70 leading-relaxed italic border-l-2 border-gold/30 pl-4 py-1">
                        "Acredito que a beleza real está nos detalhes. Meu propósito é realçar o que você já tem de mais belo, devolvendo autoestima e confiança através de técnicas exclusivas e personalizadas."
                    </p>
                </section>

                {/* Services Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 lux-shadow border border-primary/5 flex flex-col gap-1">
                        <Star className="size-5 text-gold mb-2" />
                        <span className="text-xl font-bold font-display">+500</span>
                        <span className="text-[10px] uppercase font-bold text-text-main/40 dark:text-text-dark/40 tracking-widest">Procedimentos</span>
                    </div>
                    <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 lux-shadow border border-primary/5 flex flex-col gap-1">
                        <MessageCircle className="size-5 text-gold mb-2" />
                        <span className="text-xl font-bold font-display">100%</span>
                        <span className="text-[10px] uppercase font-bold text-text-main/40 dark:text-text-dark/40 tracking-widest">Satisfação</span>
                    </div>
                </div>

                {/* Studio Section */}
                <section className="space-y-6">
                    <div>
                        <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">O Studio</h3>
                        <h4 className="text-2xl font-bold font-display mt-1">Nossa Casa</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="aspect-video w-full rounded-[2rem] overflow-hidden lux-shadow">
                            <img
                                src="/studio-2.png"
                                className="w-full h-full object-cover"
                                alt="Studio Interior"
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                            <div className="size-32 rounded-2xl overflow-hidden flex-shrink-0 lux-shadow">
                                <img src="/studio-1.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="size-32 rounded-2xl overflow-hidden flex-shrink-0 lux-shadow">
                                <img src="/studio-3.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="size-32 rounded-2xl overflow-hidden flex-shrink-0 lux-shadow">
                                <img src="https://images.unsplash.com/photo-1522338140262-f46f5912018a?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Action Buttons */}
                <section className="space-y-4 pb-12">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleWhatsApp}
                        className="w-full bg-[#25D366] text-white font-bold py-5 rounded-[2rem] lux-shadow flex items-center justify-center gap-3"
                    >
                        <MessageCircle className="size-6" />
                        Falar no WhatsApp
                    </motion.button>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleInstagram}
                            className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-primary/5 lux-shadow text-sm font-bold"
                        >
                            <Instagram className="size-4 text-gold" />
                            Instagram
                        </button>
                        <button
                            onClick={handleMaps}
                            className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-primary/5 lux-shadow text-sm font-bold"
                        >
                            <MapPin className="size-4 text-gold" />
                            Localização
                        </button>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default ContactScreen;
