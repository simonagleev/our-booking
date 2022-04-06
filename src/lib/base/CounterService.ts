import { makeAutoObservable } from "mobx";

interface ICounter {
    id: number,
    title: string,
    count: number,
}
export class CounterService {
    counters: ICounter[] = [
        {
            id: 1,
            title: 'Взрослых',
            count: 1
        },
        {
            id: 2,
            title: 'Детей',
            count: 0
        },
        {
            id: 3,
            title: 'Номеров',
            count: 0
        }
    ]

    constructor() {
        makeAutoObservable(this);
    }

    increase(id: number) {
        this.counters.map(i => i.id === id? i.count +=1 : null)
    } 
    
    decrease(id: number) {
        (id != 1)?
        this.counters.map(i => i.id === id && i.count>0? i.count -=1 : null):
          this.counters.map(i => i.id === id && i.count>1? i.count -=1 : null)
    }
}    

export default CounterService;