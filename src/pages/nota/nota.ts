import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {

  notas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notas = window.localStorage.getItem('notas');
    this.notas = JSON.parse(this.notas);
    console.log(this.notas);
  }

  teste(teste){
    console.log(teste);
  }

}
