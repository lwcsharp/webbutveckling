import { config } from './config.js';

export const get = async (endpoint) => {
  const url = `${config.apiUrl}/${endpoint}?api_key=${config.apiKey}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Det gick inte så bra ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};
