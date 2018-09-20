import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: './input.html',
})
export class InputPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController) {

  }

  form = {}

  buttonDisabled;

  createAlert(){
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'RA ou Senha estão incorretos',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  tratarForm(){
    this.buttonDisabled = true;
    this.http.post('https://apinota.herokuapp.com/api', { ra: this.form['ra'], senha: this.form['senha']} )
      .subscribe((res: any) => { 
        if(res['_body']=='ERROR'){
          this.createAlert();
          this.buttonDisabled = false;
        }else{
          this.navCtrl.push(HomePage);
          window.localStorage.setItem('notas', res['_body']);
        };
      }, () => { 
        this.createAlert();
      }); 
  }

}
