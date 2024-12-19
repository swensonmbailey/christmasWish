import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'wish-send-code',
  templateUrl: './send-code.component.html',
  styleUrl: './send-code.component.css'
})
export class SendCodeComponent  implements OnInit{
  @ViewChild('f', {static: true}) sendCodeForm!: NgForm;

  constructor(private backEnd: BackEndService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    
  }
  
  onSubmit(f: NgForm) {

    console.log(f.value.email);
    this.backEnd.sendCode(f.value.email);
    
    this.router.navigate(['/login']);

  }
    onCancel(){
      this.router.navigate(['/home']);
    }
}
