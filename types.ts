
export interface Service {
  name: string;
  icon: string;
  borderColor?: string;
}

export interface Tip {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface BookingService {
  id: number;
  name: string;
  duration: number;
  imageUrl: string;
}
