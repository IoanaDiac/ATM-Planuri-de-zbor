import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAeroporturiComponent } from './components/list-aeroporturi/list-aeroporturi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddAeroportComponent } from './components/add-aeroport/add-aeroport.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddZborComponent } from './components/add-zbor/add-zbor.component';
import { ListZboruriComponent } from './components/list-zboruri/list-zboruri.component';
import {ListPlanuriZborComponent} from './components/list-planuri-zbor/list-planuri-zbor.component';
import {ListPuncteNavComponent} from './components/list-puncte-nav/list-puncte-nav.component';
import {ListSegmenteRutaComponent} from './components/list-segmente-ruta/list-segmente-ruta.component';
import { AddPunctNavComponent } from './components/add-punct-nav/add-punct-nav.component';
import { AddSegmentRutaComponent } from './components/add-segment-ruta/add-segment-ruta.component';
import {AddPlanZborComponent} from './components/add-plan-zbor/add-plan-zbor.component';




const routes: Routes = [
  {path: '', redirectTo: '/zboruri', pathMatch: 'full'},
  {path: 'aeroporturi', component: ListAeroporturiComponent},
  {path: 'addaeroport', component: AddAeroportComponent},
  {path: 'editaeroport/:id', component: AddAeroportComponent},
  {path: 'zboruri', component: ListZboruriComponent},
  {path: 'addzbor', component: AddZborComponent},
  {path: 'editzbor/:id', component: AddZborComponent},
  {path: 'planurizbor', component: ListPlanuriZborComponent},
  {path: 'addplanzbor', component: AddPlanZborComponent},
  {path: 'editplanzbor/:id', component: AddPlanZborComponent},
  {path: 'punctenav', component: ListPuncteNavComponent},
  {path: 'addpunctnav', component: AddPunctNavComponent},
  {path: 'editpunctnav/:id', component: AddPunctNavComponent},
  {path: 'segmenteruta', component: ListSegmenteRutaComponent},
  {path: 'addsegmentruta', component: AddSegmentRutaComponent},
  {path: 'editsegmentruta/:id', component: AddSegmentRutaComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ListAeroporturiComponent,
    AddAeroportComponent,
    ListZboruriComponent,
    AddZborComponent,
    ListPlanuriZborComponent,
    AddPlanZborComponent,
    ListPuncteNavComponent,
    AddPunctNavComponent,
    ListSegmenteRutaComponent,
    AddSegmentRutaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
