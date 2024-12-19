import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  savedEmail: string = '';
  userData!: {firstName: string, lastName: string, email: string};

  constructor(private http: HttpClient) { 
    
  }

  


  create(data: any){
    this.http.post('http://localhost:3000/user', data)
    .subscribe(
      (response) => {
        console.log(response);
      }
    );
  }


  getUserData(){
    console.log(this.savedEmail);
   
    this.http.get<any>(`http://localhost:3000/user/${this.savedEmail}`, {})
    .subscribe(
      (response) => {
        console.log(response);
        this.userData = response;
      }
    );
  
    

  }

  update(data: any){
    
    this.http.put(`http://localhost:3000/user/${this.savedEmail}`, data)
    .subscribe(
      (response) => {
        console.log(response);
        this.userData = data;
        this.savedEmail = data.email;
      }
    );
  }

  delete(){
    this.http.delete(`http://localhost:3000/user/${this.savedEmail}`)
    .subscribe(
      (response) => {
        console.log(response);
      }
    );
  }


  sendCode(email: string){
    this.http.post('http://localhost:3000/login/sendCode', {email: email})
    .subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  login(email: string, oneTimeCode: string){
    this.savedEmail = email;
    this.http.post('http://localhost:3000/login', {email: this.savedEmail, code: oneTimeCode})
    .subscribe(
      (response) => {
        console.log(response);
        this.getUserData();
      }
    );
    this.getUserData();
  }

  logOut(){
    this.http.delete(`http://localhost:3000/login/${this.savedEmail}`, {})
    .subscribe(
      (response) => {
        console.log(response);
        this.savedEmail = '';
        this.userData = {firstName: '', lastName: '', email: ''};
      }
    );
  }



  
}
