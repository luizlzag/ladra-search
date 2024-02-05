import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme = this.darkTheme.asObservable();

  toggleTheme() {
    const currentTheme = this.darkTheme.value;
    document.body.classList.toggle('dark', !currentTheme);
    this.darkTheme.next(!currentTheme);
  }
  

  constructor() { }
}
