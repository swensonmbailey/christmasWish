import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wish-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    fetch("localhost:3000/wish",
      {
          method: "POST",
          body: JSON
          .stringify
          ({
            userId: 1,
            title: "Demo Todo Data",
            completed: false,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
  }

}
