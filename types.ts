export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
  category: 'Music' | 'Sport' | 'Social' | 'Bingo';
}

export interface Facility {
  id: number;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons string
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}