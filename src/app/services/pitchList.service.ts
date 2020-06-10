import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PitchListService {
  //1.VARIABLES
  //Données récupérées depuis une fausse BDD
  private pitches: any
    // = [
    //   {
    //     id: 1,
    //     title: "Pitch Title 1",
    //     category: "category A",
    //     score: 1,
    //     content: "This Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore laborum. is product 1"
    //   },
    //   {
    //     id: 2,
    //     title: "Pitch Title 2",
    //     category: "category B",
    //     score: 2,
    //     content: "This Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore laborum. is product 2"
    //   },
    //   {
    //     id: 3,
    //     title: "Pitch Title 3",
    //     category: "category C",
    //     score: 3,
    //     content: "This Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore laborum. is product 3"
    //   },
    // ]
    ;

  pitchesSubject = new Subject<any[]>();

  //2.CONSTRUCTEUR
  constructor(private httpClient: HttpClient) { }

  //3.METHODES
  emitPitchesSubject() {
    //.next() méthod qui met à jour l'observable
    this.pitchesSubject.next(this.pitches.slice());
  }

  //Récupère les pitches sur le serveur
  getPitchesFromServer() {
    // correspond à XMLHttpRequest ou à fetch en JS natif
    this.httpClient
      // Récupère les données
      .get<any[]>('https://api.npoint.io/a64f5167758424a48ace')
      // Souscrit à l'observable
      .subscribe(
        (response) => {
          // Reçoit une réponse : liste de pitch
          this.pitches = response;
          console.log("It's coming!" + response);
          // Envoie l'information au sujet
          this.emitPitchesSubject();
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }

  scoreReset() {
    for (let pitch of this.pitches) {
      pitch.score = 0;
    }
    this.emitPitchesSubject();
  }

  voteUp(i: number) {
    this.pitches[i].score++
    this.emitPitchesSubject();
  }

  voteDown(i: number) {
    this.pitches[i].score--
    this.emitPitchesSubject();
  }

  scoreResetOne(i: number) {
    this.pitches[i].score = 0
  }

  getPitchById(id: number) {
    const pitch = this.pitches.find(
      (s) => {
        return s.id === id;
      }
    );
    return pitch;
  }
}
