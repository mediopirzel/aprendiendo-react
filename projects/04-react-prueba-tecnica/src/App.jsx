import { useEffect, useState } from 'react';
import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

export function App() {
  const { factState, refreshRandomFact } = useCatFact();
  const { imageState } = useCatImage(factState);

  const handleClick = async () => {
    // amb async await
    refreshRandomFact();
  };

  return (
    <main>
      <h1>Cat fact</h1>
      {factState && <div>{factState}</div>}
      {imageState && (
        <div>
          <img src={imageState} alt={factState} />
        </div>
      )}
      <button onClick={handleClick}>Get new Fact</button>
    </main>
  );
}
