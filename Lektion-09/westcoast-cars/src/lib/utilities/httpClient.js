// Module med exporterade funktioner...
export const get = async (endpoint) => {
  const url = `http://localhost:5001/${endpoint}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Ett fel inträffade: ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    console.log('Fel info: ', error);
  }
};

export const post = () => {};
export const put = () => {};
export const remove = () => {};
