import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wish-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isLoggedIn: any;

  constructor(private backEnd: BackEndService, private router: Router,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {
    
  }

 
}
