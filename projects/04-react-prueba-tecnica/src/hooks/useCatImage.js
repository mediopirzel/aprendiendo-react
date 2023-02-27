import { useState, useEffect } from 'react';

const IMAGE_URL = `https://cataas.com/cat/says/`;

export function useCatImage(factState) {
  const [imageState, setImageState] = useState();
  // get Image
  useEffect(() => {
    if (!factState) return;
    // First word of the fact
    const result = factState.split(' ').slice(0, 1).join(' ');

    fetch(`${IMAGE_URL}${result}`).then(({ url }) => setImageState(url));
  }, [factState]);
  return { imageState };
}
