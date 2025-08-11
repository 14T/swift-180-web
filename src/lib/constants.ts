import { Building2, Film, Gamepad2, MapPin, Plug, Radio, Ticket, Tv, UtensilsCrossed, Wifi, Calendar, Trophy, Palette, Landmark, ConciergeBell, PartyPopper } from 'lucide-react';

export const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1585101806180-4ef6aae2403a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const OG_IMAGE_URL = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const TV_UI_IMAGE_URL = '/images/1.png';
export const STREAMING_STICK_IMAGE_URL = '/images/2.png';
export const BLUETOOTH_REMOTE_IMAGE_URL = '/images/16.png';
export const TRAVEL_FEATURES_IMAGE_URL = '/images/15.png';
export const CTA_BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1495017790122-c765562a8917?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const entertainmentItems = [
    {
        icon: Film,
        title: "Movies & Shows",
        description: "Stream the latest releases and classic films in 4K."
    },
    {
        icon: Landmark,
        title: "Nearby Attractions",
        description: "Discover must-see sights and local points of interest."
    },
    {
        icon: ConciergeBell,
        title: "Hotel Facilities",
        description: "Order room service or explore hotel amenities."
    },
    {
        icon: PartyPopper,
        title: "Events & Deals",
        description: "Find local happenings and exclusive offers."
    }
];

export const onboardingSteps = [
    {
        icon: Plug,
        title: "1. Plug In",
        description: "Connect the SwiftStick™ to the TV's HDMI port."
    },
    {
        icon: Wifi,
        title: "2. Connect",
        description: "Connect the device to your hotel's Wi-Fi network."
    },
    {
        icon: Tv,
        title: "3. Enjoy",
        description: "Guests can now enjoy a world of entertainment."
    }
];

export const streamingApps = ['Netflix', 'Prime Video', 'YouTube', 'Disney+', 'Spotify', 'Hulu'];

export const travelFeatures = [
    {
        icon: MapPin,
        title: "Nearby Attractions",
        description: "Discover local gems and must-see sights."
    },
    {
        icon: Ticket,
        title: "Book Tours",
        description: "Find and book exciting local tours and activities."
    },
    {
        icon: UtensilsCrossed,
        title: "Dining Options",
        description: "Explore top-rated restaurants and cafes."
    },
    {
        icon: Building2,
        title: "Hotel Services",
        description: "Order room service or view hotel promotions."
    }
]
