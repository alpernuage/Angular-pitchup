import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  authStatus:boolean;

  constructor(private authservice : AuthService , private router:Router) {

  }
  onSignIn(){
    this.authservice.signIn().then(
      () => {
        console.log('Sign in is successful!');
        this.authStatus=this.authservice.isAuth;
        this.router.navigate(['pitches']);

      }
    );
  }
  onSignOut(){
    this.authservice.signOut();
      console.log('Sign out is successful!');
      this.authStatus=this.authservice.isAuth;

  }

  ngOnInit() {
    this.authStatus=this.authservice.isAuth;
  }

}
