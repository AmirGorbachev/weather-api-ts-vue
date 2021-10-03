import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import WeatherApi from '../../api/api';

@Module({ namespaced: true })
class Weather extends VuexModule {
  private api = new WeatherApi();
  public data: Object = {};

  @Mutation
  public saveData(data: Object): void {
    this.data = data;
  }
  get weatherData(): Object {
    return this.data;
  }
  @Action({ rawError: true })
  async loadData(): Promise<void> {
    const data = await this.api.loadData();
    console.log(data);
    this.context.commit('saveData', data);
  }
}

export default Weather;
