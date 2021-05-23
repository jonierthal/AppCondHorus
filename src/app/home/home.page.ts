import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router) {}

  Pag_recados(){
    this.router.navigate(['/tab-nav/recados']);
  }

  Pag_regras(){
    this.router.navigate(['/tab-nav/regras']);
  }

  Pag_melhorias(){
    this.router.navigate(['/tab-nav/melhorias']);
  }

  Pag_relatorios(){
    this.router.navigate(['/tab-nav/relatorios']);
  }

  Pag_equipe(){
    this.router.navigate(['/tab-nav/equipe']);
  }

  Pag_Administrador(){
    this.router.navigate(['/tab-nav/administrador']);
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
