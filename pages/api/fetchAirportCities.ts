const OPENSKY_API_URL = "https://opensky-network.org/api";

export const fetchAirportCities = async (searchTerm: string) => {
  const response = await fetch(
    `${OPENSKY_API_URL}/autocomplete/airport?query=${searchTerm}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching airport cities: ${response.statusText}`);
  }

  const data = await response.json();

  return data.map((airport: any) => ({
    value: airport.iata_code,
    label: `${airport.name}, ${airport.municipality}, ${airport.country_name}`,
  }));
};
