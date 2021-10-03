import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import WeatherApi from '../../api/api';

@Module({ namespaced: true })
class Weather extends VuexModule {
  private api = new WeatherApi();
  public data: Object = {};

  @Mutation
  // public setName(newName: string): void {
  //   this.name = newName
  // }
  @Action({ rawError: true })
  async loadData(): Promise<void> {
    let data = await this.api.loadData();
    console.log(data);
    // this.context.commit('setName', newName)
  }
}

export default Weather;
