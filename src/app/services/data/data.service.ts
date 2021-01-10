import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(this.getEmptyModel()));
    }
  }

  getData() {
    return localStorage.getItem('data');
  }

  setData(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getEmptyModel() {
    return {
      suspects: {
        blue: false,
        red: false,
        purple: false,
        white: false,
        green: false,
        yellow: false
      },
      weapons: {
        pipe: false,
        candlestick: false,
        rope: false,
        knife: false,
        wrench: false,
        revolver: false
      },
      rooms: {
        study: false,
        bathroom: false,
        bedroom: false,
        kitchen: false,
        yard: false,
        gameroom: false,
        library: false,
        garage: false,
        livingroom: false,
        dinner: false
      }
    };
  }
}
