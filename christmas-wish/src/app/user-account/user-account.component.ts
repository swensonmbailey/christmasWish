import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from '../back-end.service';


@Component({
  selector: 'wish-user-account',
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent  implements OnInit{

  userData!: {firstName: string, lastName: string, email: string};

  constructor(private backEnd: BackEndService, private route: ActivatedRoute, private router: Router){
    // this.userData = this.backEnd.userData;
  }

  ngOnInit(): void {
    this.userData = this.backEnd.userData;
  }

  onUpdate(){
    this.router.navigate(['/editUser']);
  }

  onDelete(){
    this.backEnd.delete();
    this.router.navigate(['/home']);
  }




}
