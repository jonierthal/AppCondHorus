import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  
  dadosStorage: any;
  tipo_funcao: string;

  constructor(public toast: ToastController, private storage:NativeStorage,private router:Router, private provider: Post) { }

  ionViewWillEnter(){

    this.storage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.tipo_funcao = this.dadosStorage.tipo_funcao;
      })
  }
  
  ngOnInit() {
  }
  
  Pag_AddUsuarios(){
    this.router.navigate(['/tab-nav/add-usuario']);
  }

  Pag_ManterRegras(){
    this.router.navigate(['/tab-nav/manter-regras']);
  }

  Pag_ListaUsuarios(){
    this.router.navigate(['/tab-nav/listar-usuarios']);
  }

  Pag_CadastraRegras(){
    this.router.navigate(['/tab-nav/cadastra-regras']);
  }

  Pag_CadastraRelatorios(){
    this.router.navigate(['/tab-nav/cadastra-relatorios']);
  }

  Pag_ManterRelatorios(){
    this.router.navigate(['/tab-nav/manter-relatorios']);
  }

  Pag_AprovaMelhorias(){
    this.router.navigate(['/tab-nav/aprova-melhorias']);
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
