import { makeAutoObservable } from "mobx";
import { russianCitiesList } from "../../mock/RussianCities";




export class CitySearchService {

    cities = russianCitiesList.map(i => i.city);

    citiesNew = russianCitiesList.map((item, index) => {
        return {id: index, region: item.region, city: item.city};
      })

    constructor() {
        makeAutoObservable(this);
    }

    test() {
        console.log(this.citiesNew[5].city)
        console.log(this.citiesNew[5].id)
    }

}    

export default CitySearchService;