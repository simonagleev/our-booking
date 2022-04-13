import { makeAutoObservable } from "mobx";
import { russianCitiesList } from "../../../mock/RussianCities";




export class CitySearchService {

    cities = russianCitiesList.map(i => i.city);

    constructor() {
        makeAutoObservable(this);
    }

}    

export default CitySearchService;