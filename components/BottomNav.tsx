import React from 'react';
import { Home, Calendar, MessageCircle } from 'lucide-react';

interface BottomNavProps {
    activeScreen: string;
    onNavigateToHome: () => void;
    onNavigateToBooking: () => void;
    onNavigateToContact: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigateToHome, onNavigateToBooking, onNavigateToContact }) => {
    const activeClasses = "text-gold scale-110";
    const inactiveClasses = "text-text-main/40 dark:text-text-dark/40 hover:text-gold/60";

    return (
        <nav className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[430px] p-4 glass border-t border-primary/5 z-50 flex items-center justify-around pb-8">
            <button
                onClick={onNavigateToHome}
                className={`flex flex-col items-center gap-1.5 transition-all ${activeScreen === 'home' ? activeClasses : inactiveClasses}`}
            >
                <div className={`p-2 rounded-xl transition-colors ${activeScreen === 'home' ? 'bg-gold/10' : 'bg-transparent'}`}>
                    <Home className="size-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Início</span>
            </button>

            <button
                onClick={onNavigateToBooking}
                className={`flex flex-col items-center gap-1.5 transition-all ${activeScreen === 'booking' ? activeClasses : inactiveClasses}`}
            >
                <div className={`p-2 rounded-xl transition-colors ${activeScreen === 'booking' ? 'bg-gold/10' : 'bg-transparent'}`}>
                    <Calendar className="size-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Agenda</span>
            </button>

            <button
                onClick={onNavigateToContact}
                className={`flex flex-col items-center gap-1.5 transition-all ${activeScreen === 'contact' ? activeClasses : inactiveClasses}`}
            >
                <div className={`p-2 rounded-xl transition-colors ${activeScreen === 'contact' ? 'bg-gold/10' : 'bg-transparent'}`}>
                    <MessageCircle className="size-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Contato</span>
            </button>
        </nav>
    );
};

export default BottomNav;
