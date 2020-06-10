import { Component, OnInit, OnDestroy } from '@angular/core';
import { PitchListService } from '../services/pitchList.service';
import { Subscription } from 'rxjs';

PitchListService

@Component({
  selector: 'app-pitch-list',
  templateUrl: './pitch-list.component.html',
  styleUrls: ['./pitch-list.component.css']
})

export class PitchListComponent implements OnInit, OnDestroy {
  pitches: any = [];
  pitchSubscription: any;

  constructor(private pitchListService: PitchListService) {

  }

  onResetAll() {
    this.pitchListService.scoreReset();
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2500
    );
  })

  ngOnInit() {
    this.pitchListService.getPitchesFromServer;
    //Souscription au sujet contenu dans pitchListService, qui contient l'observable pitches
    this.pitchSubscription = this.pitchListService.pitchesSubject.subscribe(
      (pitches: any[]) => {
        this.pitches = pitches;
      }
    );
  }

  ngOnDestroy() {
    this.pitchSubscription.unsubscribe();
  }

}
