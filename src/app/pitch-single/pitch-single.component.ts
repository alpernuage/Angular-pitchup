import { Component, OnInit, Input } from '@angular/core';
import { PitchListService } from '../services/pitchList.service';

@Component({
  selector: 'app-pitch-single',
  templateUrl: './pitch-single.component.html',
  styleUrls: ['./pitch-single.component.css']
})
export class PitchSingleComponent implements OnInit {
  // 1. variable
  @Input() pitchTitle: string;
  @Input() pitchCategory: string;
  @Input() pitchScore: number;
  @Input() pitchContent: string;
  @Input() pitchId: number;
  @Input() lastUpdate: Date;
  @Input() isAuth: boolean;
  @Input() index: number;
  // pitchTitle : string ="Pitch title from .ts";

  // 2 . constructor
  constructor(private pitchListService: PitchListService) {

  }
  // 3.Méthodes/fonctions
  // getPitchTitle(){
  //   return this.pitchTitle;
  // }
  onVoteUp() {
    this.pitchListService.voteUp(this.index);
  }

  onVoteDown() {
    this.pitchListService.voteDown(this.index);
  }

  onResetOne() {
    this.pitchListService.scoreResetOne(this.index);
  }

  getBgColor() {
    if (this.pitchCategory === "category A") {
      return "#FF3eaF";
    }
    else if (this.pitchCategory === "category B") {
      return "#3aFFaB";
    }
    else if (this.pitchCategory === "category C") {
      return "#053C5E";
    }
  }

  // 4.ng on init
  ngOnInit() {
  }

}
