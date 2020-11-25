import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  date: string;description: string;
  userUid: string;
  
  constructor(private db: AngularFirestore, private authservice: AuthService, private alertCtrl: AlertController, private navCtrl: NavController) { }
  ngOnInit() {
    this.authservice.getUserAuth().subscribe((user) => {
      this.userUid = user.uid;
    });
  }
  CrearFicha() {
    let worksheet = {
      date: this.date,
      description: this.description,
      useruid: this.userUid
    };
    this.db.collection("worksheet").add(worksheet).
    then( response=>{
      this.navCtrl.back();
      this.presentAlert();
    });
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Atención',
      message: 'La ficha se ha creado correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
