import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-melhorias',
  templateUrl: './cadastra-melhorias.page.html',
  styleUrls: ['./cadastra-melhorias.page.scss'],
})
export class CadastraMelhoriasPage implements OnInit {

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router) { }

  ngOnInit() {
  }

  async logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toast.create({
      message: 'Usuário deslogado!',
      duration:2000,
      color:'primary'
    });
    toast.present();
    }

}
