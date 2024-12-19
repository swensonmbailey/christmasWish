import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'wish-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  constructor(private backEnd: BackEndService, private route: ActivatedRoute, private router: Router){}

  onSubmit(f: NgForm) {
    this.backEnd.create({firstName: f.value.firstName, lastName: f.value.lastName, email: f.value.email})

    this.router.navigate(['/sendCode']); 
  }

  onCancel(){
    this.router.navigate(['/home']); 
  }
}

