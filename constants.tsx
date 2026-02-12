import { Event, Facility } from './types';
import { 
  Music, 
  Trophy, 
  Beer, 
  Users, 
  Calendar,
  Mic2
} from 'lucide-react';
import React from 'react';

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Northern Soul Night",
    date: "2023-11-25",
    time: "19:30",
    description: "Keep the faith! Join us for a night of classic Northern Soul and Motown stompers on our wooden dancefloor.",
    imageUrl: "https://picsum.photos/seed/soul/800/600",
    category: 'Music'
  },
  {
    id: 2,
    title: "Sunday Cash Bingo",
    date: "Every Sunday",
    time: "12:00",
    description: "Big cash prizes to be won every Sunday afternoon. Members and guests welcome.",
    imageUrl: "https://picsum.photos/seed/bingo/800/600",
    category: 'Bingo'
  },
  {
    id: 3,
    title: "Live Band: The Rockin' 60s",
    date: "2023-12-02",
    time: "20:00",
    description: "The best hits from the swinging 60s live on stage. Tickets £5 on the door.",
    imageUrl: "https://picsum.photos/seed/band/800/600",
    category: 'Music'
  },
  {
    id: 4,
    title: "Premier League: Forest vs Liverpool",
    date: "2023-12-09",
    time: "14:00",
    description: "Watch the game live on our massive HD projector screens. Pints from £3.50 during the match.",
    imageUrl: "https://picsum.photos/seed/football/800/600",
    category: 'Sport'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 1,
    title: "The Main Lounge",
    description: "A comfortable, spacious lounge bar serving a wide range of lagers, ciders, real ales, and spirits.",
    iconName: "Beer",
    imageUrl: "https://picsum.photos/seed/bar/600/400"
  },
  {
    id: 2,
    title: "Function Room Hire",
    description: "Available for weddings, birthdays, and wakes. Features a private bar and stage area. Catering available.",
    iconName: "Calendar",
    imageUrl: "https://picsum.photos/seed/wedding/600/400"
  },
  {
    id: 3,
    title: "Sports & Games",
    description: "Pool tables, dart boards, and a pristine bowling green. Home to several local league teams.",
    iconName: "Trophy",
    imageUrl: "https://picsum.photos/seed/snooker/600/400"
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Events', href: '#events' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Membership', href: '#join' },
  { name: 'Contact', href: '#contact' },
];