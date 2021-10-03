const axios = require('axios');
let apiKey = '0249f00b29849a2ef01cc8243ab3e031';
let city = 'Moscow';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

axios.get(url).then((res) => {
  console.log(res.data);
});
