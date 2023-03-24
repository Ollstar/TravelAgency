const accessKey = process.env.UNSPLASH_ACCESS_KEY;

export const fetchUnsplashImage = async (query: string, width = 800, height = 600): Promise<string> => {
  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
    query
  )}&orientation=landscape&client_id=${accessKey}&w=${width}&h=${height}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.urls.raw;
  } catch (error) {
    return 'Error';
  }
};
