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

export const search = async (endpoint, searchCriteria) => {
  const url = `${config.apiUrl}/search/${endpoint}?api_key=${config.apiKey}&query=${searchCriteria}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    else {
      throw new Error(`sumting wrong ${response.ok}, ${respone.statusText}`)
    }
  } catch (error) {
    console.error(error);
  };
};