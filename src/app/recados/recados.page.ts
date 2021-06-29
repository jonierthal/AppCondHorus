import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-recados',
  templateUrl: './recados.page.html',
  styleUrls: ['./recados.page.scss'],
})
export class RecadosPage implements OnInit {

  recados: any[];
  limit: number = 15;
  start: number = 0;
  dadosStorage: any;
  tipo_funcao: string;

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router,private provider: Post) { }


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.recados = [];
    this.start = 0;
    this.carregar();

    this.storage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.tipo_funcao = this.dadosStorage.tipo_funcao;
      })
  }

  carregar(){

    return new Promise(resolve => {
      this.recados = [];
    let dados_recado = {
      requisicao : 'listar_recado',
      limit: this.limit,
      start: this.start,
    };

      this.provider.dadosApi(dados_recado,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let recado of data['result']){
          this.recados.push(recado);
        }
      }
        resolve(true);
      });
  });
}
  
  Cadastra_recados(){
    this.router.navigate(['/tab-nav/cadastra-recados']);
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
