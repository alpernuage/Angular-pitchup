import { Component , OnInit, OnDestroy} from '@angular/core';
import { PitchListService } from './services/pitchList.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  // variables
  seconds: number;
  counterSubscription :Subscription;


  constructor(private pitchListService:PitchListService , private authservice: AuthService ) {}

  getAuthStatus(){
    return this.authservice.isAuth;

  }

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription=counter.subscribe(
      (value) =>{
        this.seconds = value;
      },
      (error)=>{
        console.log('OOps! Error: '+ error);
      },
      () => {
        console.log('Observable complete!');
      }
    )

  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
