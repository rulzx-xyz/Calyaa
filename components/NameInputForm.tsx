
import React, { useState } from 'react';

interface NameInputFormProps {
  initialName: string;
  onSubmit: (name: string) => void;
  isLoading: boolean;
}

export const NameInputForm: React.FC<NameInputFormProps> = ({ initialName, onSubmit, isLoading }) => {
  const [name, setName] = useState(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && !isLoading) {
      onSubmit(name.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 max-w-sm mx-auto">
      <div className="relative w-full">
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name..."
            disabled={isLoading}
            className="w-full px-5 py-3 text-lg text-center text-white bg-white/10 rounded-full border-2 border-pink-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 outline-none transition-all duration-300 backdrop-blur-sm placeholder-gray-400"
        />
         <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-2 text-sm text-pink-400">Your beloved's name</span>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-in-out rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-pink-600 group-hover:h-0"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 ease-in-out bg-orange-500 group-hover:h-full"></span>
        <span className="absolute inset-0 w-full h-full duration-300 ease-in-out delay-200 bg-purple-600 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-200 ease-in-out group-hover:text-white">
          {isLoading ? 'Writing a Poem...' : 'Generate Love Note'}
        </span>
      </button>
    </form>
  );
};
