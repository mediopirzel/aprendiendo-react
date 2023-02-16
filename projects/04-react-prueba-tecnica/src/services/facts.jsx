const FACT_URL = `https://catfact.ninja/fact`;
export const getRandomFacts = async () => {
  const response = await fetch(FACT_URL);
  const { fact, length } = await response.json();
  return fact;
};
