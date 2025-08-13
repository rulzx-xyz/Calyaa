
import React from 'react';
import { Bubbles } from './components/Bubbles';
import { FloatingText } from './components/FloatingText';

const App: React.FC = () => {
  const name = 'Calyaa';

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black flex justify-center items-center">
      <FloatingText name={name} />
      <Bubbles />
    </main>
  );
};

export default App;
