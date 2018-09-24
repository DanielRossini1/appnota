import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, private alertCtrl: AlertController) {

  }

  form = {}


  createAlert(){
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'RA ou Senha estão incorretos',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  tratarForm(){
      this.http.post('https://apinota.herokuapp.com/api', { ra: this.form['ra'], senha: this.form['senha']}, {})
        .then(function(res){
          console.log(res);
        }).catch(function(err){
          
        });
      }
      
    }
    
    
    
    // if(res=='ERROR'){
    //   this.createAlert();
    // }else{
    //   this.navCtrl.pop(HomePage);
    //   window.localStorage.setItem('notas', res);
    // };
