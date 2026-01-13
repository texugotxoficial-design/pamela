
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreHorizontal, Calendar as CalendarIcon, Clock, Check, ArrowLeft } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { BOOKING_SERVICES, AVAILABLE_TIMES, WHATSAPP_NUMBER } from '../constants';
import type { BookingService } from '../types';

interface BookingScreenProps {
    onNavigateBack: () => void;
}

const BookingHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 glass px-6 py-5 flex items-center justify-between"
    >
        <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gold/10 transition-colors">
            <ArrowLeft className="size-5 text-text-main dark:text-white" />
        </button>
        <h1 className="font-display text-xl font-bold tracking-tight text-text-main dark:text-white">Reservar Horário</h1>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-gold/10 transition-colors">
            <MoreHorizontal className="size-5 text-text-main dark:text-white" />
        </button>
    </motion.header>
);

const ServiceCard: React.FC<{ service: BookingService; isSelected: boolean; onSelect: () => void }> = ({ service, isSelected, onSelect }) => (
    <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={onSelect}
        className={`flex-shrink-0 w-44 group cursor-pointer relative overflow-hidden rounded-3xl border transition-all duration-300 ${isSelected ? 'border-gold lux-shadow scale-105' : 'border-primary/5 hover:border-gold/30'}`}
    >
        <div className="aspect-[4/5] relative">
            <img src={service.imageUrl} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-bold leading-tight font-display mb-1">{service.name}</p>
                <div className="flex items-center gap-2">
                    <span className="text-white/60 text-[10px]">{service.duration} min</span>
                </div>
            </div>
            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute top-3 right-3 size-6 rounded-full bg-gold flex items-center justify-center shadow-lg"
                    >
                        <Check className="size-3 text-white stroke-[3px]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </motion.div>
);

const Calendar: React.FC<{ selectedDate: Date; onSelectDate: (date: Date) => void }> = ({ selectedDate, onSelectDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const days = useMemo(() => {
        const start = startOfMonth(currentMonth);
        const end = endOfMonth(currentMonth);
        return eachDayOfInterval({ start, end });
    }, [currentMonth]);

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 lux-shadow border border-primary/5">
            <div className="flex items-center justify-between mb-6">
                <button onClick={prevMonth} className="p-2 rounded-xl hover:bg-gold/10 transition-colors text-gold">
                    <ChevronLeft className="size-5" />
                </button>
                <p className="font-display font-bold text-lg capitalize">
                    {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
                </p>
                <button onClick={nextMonth} className="p-2 rounded-xl hover:bg-gold/10 transition-colors text-gold">
                    <ChevronRight className="size-5" />
                </button>
            </div>

            <div className="grid grid-cols-7 text-center mb-4">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: startOfMonth(currentMonth).getDay() }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-10" />
                ))}
                {days.map(day => {
                    const selected = isSameDay(day, selectedDate);
                    const today = isToday(day);
                    const past = day < startOfDay(new Date()) && !today;

                    return (
                        <button
                            key={day.toString()}
                            disabled={past}
                            onClick={() => onSelectDate(day)}
                            className={`h-11 w-11 mx-auto flex flex-col items-center justify-center text-xs rounded-2xl transition-all relative
                                ${selected ? 'bg-gold text-white font-bold lux-shadow scale-110 z-10' : 'hover:bg-gold/10'}
                                ${today && !selected ? 'text-gold font-bold ring-1 ring-gold' : ''}
                                ${past ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}
                            `}
                        >
                            {format(day, 'd')}
                            {today && !selected && <div className="absolute bottom-1 size-1 bg-gold rounded-full" />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const BookingScreen: React.FC<BookingScreenProps> = ({ onNavigateBack }) => {
    const [selectedServiceId, setSelectedServiceId] = useState<number>(BOOKING_SERVICES[1].id);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string>('14:00');

    const selectedService = useMemo(() => {
        return BOOKING_SERVICES.find(s => s.id === selectedServiceId) || null;
    }, [selectedServiceId]);

    const handleConfirm = () => {
        if (!selectedService) return;

        const dateStr = format(selectedDate, "dd 'de' MMMM", { locale: ptBR });
        const message = encodeURIComponent(
            `Olá! Gostaria de agendar um procedimento:\n\n` +
            `✨ *Serviço:* ${selectedService.name}\n` +
            `📅 *Data:* ${dateStr}\n` +
            `⏰ *Horário:* ${selectedTime}\n\n` +
            `Por favor, confirme a disponibilidade.`
        );

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
            <BookingHeader onBack={onNavigateBack} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 space-y-10 mt-8"
            >
                {/* Passo 1: Serviços */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-8 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-bold text-xs ring-1 ring-gold/20">1</div>
                        <h2 className="font-display text-2xl font-bold">O que vamos realçar?</h2>
                    </div>
                    <div className="flex overflow-x-auto gap-5 pb-4 no-scrollbar -mx-6 px-6">
                        {BOOKING_SERVICES.map(service => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                isSelected={selectedServiceId === service.id}
                                onSelect={() => setSelectedServiceId(service.id)}
                            />
                        ))}
                    </div>
                </section>

                {/* Passo 2: Data */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-8 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-bold text-xs ring-1 ring-gold/20">2</div>
                        <h2 className="font-display text-2xl font-bold">Escolha o dia ideal</h2>
                    </div>
                    <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                </section>

                {/* Passo 3: Horário */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-8 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-bold text-xs ring-1 ring-gold/20">3</div>
                        <h2 className="font-display text-2xl font-bold">Melhor horário</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {AVAILABLE_TIMES.map(slot => (
                            <button
                                key={slot.time}
                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                disabled={!slot.available}
                                className={`py-4 rounded-2xl border text-sm font-bold transition-all
                                ${!slot.available ? 'opacity-20 cursor-not-allowed bg-black/5 dark:bg-white/5 border-transparent' : ''}
                                ${slot.available && selectedTime === slot.time ? 'bg-gold text-white border-gold lux-shadow scale-105' : 'border-primary/5 bg-white dark:bg-zinc-900 hover:border-gold/30'}
                                `}
                            >
                                {slot.time}
                            </button>
                        ))}
                    </div>
                </section>
            </motion.div>

            {/* Footer de Confirmação */}
            <AnimatePresence>
                {selectedService && (
                    <motion.footer
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[430px] p-6 glass border-t border-primary/5 z-[60] pb-10"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="size-14 rounded-2xl overflow-hidden bg-gold/10 lux-shadow flex-shrink-0">
                                    <img src={selectedService.imageUrl} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[10px] uppercase font-bold text-gold tracking-[0.2em] truncate">{selectedService.name}</span>
                                    <span className="text-base font-bold text-text-main dark:text-white leading-tight">
                                        {format(selectedDate, "dd 'de' MMM", { locale: ptBR })} às {selectedTime}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 ml-2">
                                <span className="text-[10px] uppercase font-bold text-gold tracking-widest bg-gold/10 px-2 py-1 rounded-lg">{selectedService.duration} min</span>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleConfirm}
                            className="w-full bg-gold text-white font-bold py-5 rounded-[2rem] lux-shadow flex items-center justify-center gap-3 relative overflow-hidden group px-4"
                        >
                            <span className="relative z-10 text-center">Finalizar Agendamento</span>
                            <Check className="size-5 stroke-[3px] relative z-10 flex-shrink-0" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </motion.footer>
                )}
            </AnimatePresence>
        </div>
    );
};


export default BookingScreen;
