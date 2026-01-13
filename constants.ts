
import { Service, Tip, BookingService } from './types';

export const WHATSAPP_NUMBER = '5516999783380';
export const STUDIO_ADDRESS = 'Rua Urbano de Paula Soares, 1435, Miguelópolis - SP';

export const HOME_SERVICES: Service[] = [
  { name: 'Design de Sobrancelhas', icon: 'content_cut' },
  { name: 'Extensão de Cílios', icon: 'visibility', borderColor: 'border-primary/10' },
  { name: 'Hydra Gloss', icon: 'auto_awesome' },
];

export const TIPS: Tip[] = [
  {
    category: 'Sobrancelhas',
    title: 'Como manter o design perfeito por mais tempo',
    description: 'Dicas simples de cuidados diários para prolongar o efeito...',
    imageUrl: 'https://images.unsplash.com/photo-1522338140262-f46f5912018a?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Cílios',
    title: 'Cuidados essenciais com sua extensão',
    description: 'Aprenda a lavar e escovar seus cílios sem danificá-los...',
    imageUrl: 'https://images.unsplash.com/photo-1583001838477-cd09ccf1766a?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Bem-Estar',
    title: 'A auto-estima através do autocuidado',
    description: 'Como pequenos rituais de beleza transformam seu dia...',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
  }
];

export const BOOKING_SERVICES: BookingService[] = [
  {
    id: 1,
    name: 'Design de Sobrancelhas',
    duration: 30,
    imageUrl: 'https://images.unsplash.com/photo-1522338140262-f46f5912018a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Brow Lamination',
    duration: 50,
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Extensão de Cílios (Volume)',
    duration: 120,
    imageUrl: 'https://images.unsplash.com/photo-1583001838477-cd09ccf1766a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Lash Lifting',
    duration: 60,
    imageUrl: 'https://images.unsplash.com/photo-1621087579048-f29e9241517a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    name: 'Hydra Gloss',
    duration: 45,
    imageUrl: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    name: 'Cílios Italiano (Tufos)',
    duration: 90,
    imageUrl: 'https://images.unsplash.com/photo-1583001838477-cd09ccf1766a?auto=format&fit=crop&q=80&w=600'
  },
];

export const AVAILABLE_TIMES = [
  { time: '09:00', available: true },
  { time: '10:30', available: true },
  { time: '14:00', available: true },
  { time: '15:30', available: true },
  { time: '17:00', available: false },
  { time: '18:30', available: true },
];
