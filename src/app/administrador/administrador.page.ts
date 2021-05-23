import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(public toast: ToastController, private storage:NativeStorage,private router:Router) { }

  ngOnInit() {
  }

  
  Pag_AddUsuarios(){
    this.router.navigate(['/tab-nav/add-usuario']);

  }

  Pag_ListaUsuarios(){
    this.router.navigate(['/tab-nav/listar-usuarios']);

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
