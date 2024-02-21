import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solar-premium';

  constructor() {}

  isAuthenticated(): boolean {
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      return false;
    } else if (token === "true") {
      return true;
    }
    return false;
  }

}

