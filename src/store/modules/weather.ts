import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import WeatherApi from '../../api/api';

@Module({ namespaced: true })
class Weather extends VuexModule {
  // init api
  private api = new WeatherApi();
  // state
  private locations: String[] = ['Moscow', 'London'];
  private weatherForLocations: Object[] = [];

  @Mutation
  public saveNewWeatherData(data: Object): void {
    this.weatherForLocations.push(data);
  }

  @Mutation
  public pushNewLocation(location: String): void {
    this.locations.push(location);
  }

  @Mutation
  public removeLocation(location: String): void {
    this.locations = this.locations.filter((item) => item !== location);
  }

  @Mutation
  public cleanWeatherData(): void {
    this.weatherForLocations = [];
  }

  @Action({ rawError: true })
  async loadData(): Promise<void> {
    this.context.commit('cleanWeatherData');

    for (let item in this.locations) {
      const data = await this.api.loadData(this.locations[item]);
      console.log(data);
      this.context.commit('saveNewWeatherData', data);
    }
  }

  get weatherData(): Object[] {
    return this.weatherForLocations;
  }

  get locationsData(): String[] {
    return this.locations;
  }
}

export default Weather;
