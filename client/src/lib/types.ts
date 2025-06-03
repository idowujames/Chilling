export interface Artist {
  id: number;
  name: string;
  genre: string;
  achievement: string;
  streams: string;
  image: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  genre?: string;
  experience?: string;
  message: string;
  createdAt: Date;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  number: string;
  label: string;
}
