//1.Imports Angular: ordre alphabétique

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//2.Service Angular: ordre alphabétique
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { PitchListService } from './services/pitchList.service';

//3.Components Angular: ordre alphabétique
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PitchDetailComponent } from './pitch-detail/pitch-detail.component';
import { PitchListComponent } from './pitch-list/pitch-list.component';
import { PitchSingleComponent } from './pitch-single/pitch-single.component';

const appRoutes: Routes = [
  { path: 'pitches', canActivate: [AuthGuard], component: PitchListComponent },
  { path: '', component: IndexComponent },
  { path: 'pitches/:id', canActivate: [AuthGuard], component: PitchDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },

]
@NgModule({
  declarations: [
    AppComponent,
    PitchSingleComponent,
    IndexComponent,
    PitchListComponent,
    PitchDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PitchListService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
