<template>
  <div class="hello">
    <p>454545</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const axios = require('axios');
// API ключ
let apiKey = '0249f00b29849a2ef01cc8243ab3e031';
// Город погода которого нужна
let city = 'Moscow';
// Формируем url для GET запроса
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

axios.get(url).then((res) => {
  // Выводим результат в консоль браузера
  console.log(res.data);
});

@Component({
  name: 'WeatherWidget',
})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
