import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router){}
  checkAndGo(){
    //test donnée s7a7 wlla:
    this.router.navigate(["/login"]);
  }
}
