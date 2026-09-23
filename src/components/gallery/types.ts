
export interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  views: number;
}

export interface Video {
  id: number;
  youtubeId: string;
  title: string;
}

export type ViewMode = 'grid' | 'list';
export type ActiveTab = 'photos' | 'videos';
