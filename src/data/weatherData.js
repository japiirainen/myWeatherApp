async function fetchData() {
  const response = await fetch(
    "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?units=M&lang=en&lat=60.205490&lon=24.655899",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "b000fe6d30msh9d9743987390201p14578fjsne4b0dbb4a528",
      },
    }
  );
  console.log("got weather response", response);

  return response.json();
}

async function getWeatherData() {
  function mapData(item) {
    return {
      date: item.datetime,
      temp: item.temp,
      hum: item.rh,
      wind: {
        speed: item.wind_spd,
        direction: item.wind_dir,
      },
    };
  }

  const data = await fetchData();
  return data.data.map(mapData);
}

export { getWeatherData };
