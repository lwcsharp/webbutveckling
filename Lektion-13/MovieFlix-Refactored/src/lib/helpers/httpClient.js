import { config } from './config.js';

export const get = async (endpoint, page = 1) => {
  const url = `${config.apiUrl}/${endpoint}?api_key=${config.apiKey}&page=${page}`;

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

export const search = async (endpoint, searchCriteria, page = 1) => {
  const url = `${config.apiUrl}/search/${endpoint}?api_key=${config.apiKey}&query=${searchCriteria}&page=${page}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Något gick fel ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};
