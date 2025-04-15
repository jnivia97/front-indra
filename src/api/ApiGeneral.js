const API_URL = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes/random";

export const getAllQuotes = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error al obtener la cita');
  }

  const data = await response.json();
  return data;
};
