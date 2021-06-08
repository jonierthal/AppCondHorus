import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';


@Component({
  selector: 'app-melhorias',
  templateUrl: './melhorias.page.html',
  styleUrls: ['./melhorias.page.scss'],
})
export class MelhoriasPage implements OnInit {

  melhorias: any[];
  limit: number = 15;
  start: number = 0;

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router, private provider: Post) { }
  

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.melhorias = [];
    this.start = 0;
    this.carregar();
  }

  carregar(){

    return new Promise(resolve => {
      this.melhorias = [];
    let dados_melhorias = {
      requisicao : 'listar_melhoria',
      limit: this.limit,
      start: this.start,
    };

      this.provider.dadosApi(dados_melhorias,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let melhoria of data['result']){
          this.melhorias.push(melhoria);
        }
      }
        resolve(true);
      });
  });
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
