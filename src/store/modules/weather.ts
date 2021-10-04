import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import WeatherApi from '../../api/api';

@Module({ namespaced: true })
class Weather extends VuexModule {
  private api = new WeatherApi();
  private locations = ['Moscow', 'London'];
  private weatherForLocations: Object[] = [];

  @Mutation
  public saveNewWeatherData(data: Object): void {
    this.weatherForLocations.push(data);
  }
  get weatherData(): Object {
    return this.weatherForLocations;
  }
  @Action({ rawError: true })
  async loadData(): Promise<void> {
    for (let item in this.locations) {
      const data = await this.api.loadData(this.locations[item]);
      console.log(data);
      this.context.commit('saveNewWeatherData', data);
    }
  }
}

export default Weather;
