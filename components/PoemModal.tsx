
import React from 'react';

interface PoemModalProps {
  isOpen: boolean;
  onClose: () => void;
  poem: string | null;
  isLoading: boolean;
  name: string;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-400"></div>
        <p className="text-white/80 text-lg">Crafting a special verse...</p>
    </div>
);

export const PoemModal: React.FC<PoemModalProps> = ({ isOpen, onClose, poem, isLoading, name, error }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900/70 border border-pink-500/50 rounded-2xl shadow-2xl shadow-pink-500/20 w-11/12 max-w-md m-4 p-8 text-center text-white transform transition-all duration-300 ease-out scale-95 animate-in fade-in-0 zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-300">A Poem for {name}</h2>
        
        <div className="min-h-[100px] flex items-center justify-center">
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <blockquote className={`text-xl md:text-2xl italic leading-relaxed ${error ? 'text-red-400' : 'text-gray-200'}`}>
                    <p>"{poem}"</p>
                </blockquote>
            )}
        </div>

      </div>
    </div>
  );
};
