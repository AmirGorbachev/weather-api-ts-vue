const axios = require('axios');

export default class WeatherApi {
  constructor() {}

  async loadData(city: String): Promise<Object> {
    let result = {};
    let apiKey = '0249f00b29849a2ef01cc8243ab3e031';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

    await axios.get(url).then((data: any) => {
      result = data.data;
    });

    return result;
  }
}

export { WeatherApi };
