
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'wish-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  @ViewChild('f', {static: true}) loginForm!: NgForm;

  constructor(private backEnd: BackEndService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    
  }
  
  onSubmit(f: NgForm) {

    console.log(f.value.email);
    this.backEnd.login(f.value.email, f.value.code);
    setTimeout(() => {
      this.router.navigate(['/userAcc']); 
    }, 1000);
  }

  onCancel(){
    this.router.navigate(['/home']); 
  }

}
