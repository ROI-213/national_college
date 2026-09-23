import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const CAMPUS_TOUR_YOUTUBE_ID = 'wG-4lNBk1ZU';

interface CampusTourModalProps {
  children: (openModal: () => void) => React.ReactNode;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children(() => setIsOpen(true))}
      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-none backdrop-blur-sm [&>button]:hidden">
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white hover:bg-red-500 hover:text-white text-black rounded-full p-2 transition-colors shadow-lg"
              aria-label="Close"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>
          <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black">
            {isOpen && (
              <iframe
                src={`https://www.youtube.com/embed/${CAMPUS_TOUR_YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
