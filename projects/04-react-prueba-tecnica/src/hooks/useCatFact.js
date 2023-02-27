import { useState, useEffect } from 'react';
import { getRandomFacts } from '../services/facts';

export function useCatFact() {
  const [factState, setFactState] = useState();

  const refreshRandomFact = () => {
    getRandomFacts().then((fact) => setFactState(fact));
  };

  useEffect(refreshRandomFact, []);

  return { factState, refreshRandomFact };
}
