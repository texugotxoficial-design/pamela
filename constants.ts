
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
    imageUrl: '/result-1.jpeg'
  },
  {
    category: 'Cílios',
    title: 'Cuidados essenciais com sua extensão',
    description: 'Aprenda a lavar e escovar seus cílios sem danificá-los...',
    imageUrl: '/result-2.jpeg'
  },
  {
    category: 'Bem-Estar',
    title: 'A auto-estima através do autocuidado',
    description: 'Como pequenos rituais de beleza transformam seu dia...',
    imageUrl: '/result-3.jpeg'
  }
];

export const BOOKING_SERVICES: BookingService[] = [
  {
    id: 1,
    name: 'Design de Sobrancelhas',
    duration: 30,
    imageUrl: '/service-1.jpeg'
  },
  {
    id: 2,
    name: 'Brow Lamination',
    duration: 50,
    imageUrl: '/service-2.jpeg'
  },
  {
    id: 3,
    name: 'Extensão de Cílios (Volume)',
    duration: 120,
    imageUrl: '/service-3.jpeg'
  },
  {
    id: 4,
    name: 'Lash Lifting',
    duration: 60,
    imageUrl: '/service-4.jpeg'
  },
  {
    id: 5,
    name: 'Hydra Gloss',
    duration: 45,
    imageUrl: '/service-5.jpeg'
  },
  {
    id: 6,
    name: 'Cílios Italiano (Tufos)',
    duration: 90,
    imageUrl: '/service-6.jpeg'
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
