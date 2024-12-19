import { Component } from '@angular/core';
import { BackEndService } from './back-end.service';

@Component({
  selector: 'wish-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'christmas-wish';
  constructor(private backEnd: BackEndService){}
}
