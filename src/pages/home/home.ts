import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FrequenciaPage } from '../frequencia/frequencia';
import { NotaPage } from '../nota/nota';

// import { HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  nota = NotaPage;
  frequencia = FrequenciaPage;
  title; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  abaSelected(aba){
    this.title = aba;
  }

}
