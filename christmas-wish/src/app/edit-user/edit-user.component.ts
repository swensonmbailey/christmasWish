import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'wish-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent  implements OnInit{
  @ViewChild('f', {static: true}) userForm!: NgForm;


  constructor(private backEnd: BackEndService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
  }

  
  

  onSubmit(f: NgForm) {

    console.log(f.value.email);
    this.backEnd.update({firstName: f.value.firstName, lastName: f.value.lastName, email: f.value.email})

    setTimeout(() => {
      this.router.navigate(['/userAcc']); 
    }, 1000);
  }

  onCancel(){
    this.router.navigate(['/userAcc']); 
  }
}
