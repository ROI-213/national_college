
import { Photo, Video } from './types';
import galleryFacultyEvent from '@/assets/gallery-faculty-event.jpg';
import galleryCulturalDance from '@/assets/gallery-cultural-dance.jpg';
import galleryMouSigning from '@/assets/gallery-mou-signing.jpg';
import galleryAwardCeremony from '@/assets/gallery-award-ceremony.jpg';
import gallerySportsTeam from '@/assets/gallery-sports-team.jpg';
import galleryBeyondStars from '@/assets/gallery-beyond-stars.jpg';

export const photos: Photo[] = [
  { id: 1, src: galleryFacultyEvent, title: 'Faculty Event on Stage', category: 'events', views: 1250 },
  { id: 2, src: galleryCulturalDance, title: 'Cultural Dance Performance', category: 'events', views: 980 },
  { id: 3, src: galleryMouSigning, title: 'MOU Signing Ceremony', category: 'events', views: 850 },
  { id: 4, src: galleryAwardCeremony, title: 'Award Ceremony 2024', category: 'events', views: 2100 },
  { id: 5, src: gallerySportsTeam, title: 'Sports Team', category: 'events', views: 1450 },
  { id: 6, src: galleryBeyondStars, title: 'Beyond the Stars Event', category: 'events', views: 750 },
];

export const videos: Video[] = [
  { id: 1, youtubeId: 'vujdBxnnC-Q', title: 'College Introduction' },
  { id: 2, youtubeId: 'M2yG03iiyUA', title: 'Campus Tour 2024' },
  { id: 3, youtubeId: 'p6h74uVPOjg', title: 'Annual Day Highlights' },
  { id: 4, youtubeId: 'wG-4lNBk1ZU', title: 'Discover Excellence' },
  { id: 5, youtubeId: 'PIo3jFcRO9E', title: 'Student Life' },
];
