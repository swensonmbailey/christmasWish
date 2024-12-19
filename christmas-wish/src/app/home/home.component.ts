import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wish-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/wish')
    .subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}
