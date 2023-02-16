import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFacts } from './services/facts';

const IMAGE_URL = `https://cataas.com/cat/says/`;

function useCatImage(factState) {
  const [imageState, setImageState] = useState();
  // get Image
  useEffect(() => {
    if (!factState) return;
    const result = factState.split(' ').slice(0, 1).join(' ');
    fetch(`${IMAGE_URL}${result}`).then(({ url }) => setImageState(url));
  }, [factState]);
  return imageState;
}

export function App() {
  const [factState, setFactState] = useState();
  const imageState = useCatImage(factState);

  useEffect(() => {
    // amb then
    getRandomFacts().then((fact) => setFactState(fact));
  }, []);

  const handleClick = async () => {
    // amb async await
    const fact = await getRandomFacts();
    setFactState(fact);
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
