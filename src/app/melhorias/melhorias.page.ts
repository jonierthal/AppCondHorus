import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-melhorias',
  templateUrl: './melhorias.page.html',
  styleUrls: ['./melhorias.page.scss'],
})
export class MelhoriasPage implements OnInit {

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router) { }
  //Envia para  Home
 

  ngOnInit() {
  }

  Cadastra_Melhorias(){
    this.router.navigate(['/tab-nav/cadastra-melhorias']);
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
