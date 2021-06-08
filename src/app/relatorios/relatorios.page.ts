import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {

  relatorios: any[];
  limit: number = 12;
  start: number = 0;

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router,private provider: Post ) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.relatorios = [];
    this.start = 0;
    this.carregar();

  }

  carregar(){

    return new Promise(resolve => {
      this.relatorios = [];
    let dados_relatorios = {
      requisicao : 'listar_relatorios',
      limit: this.limit,
      start: this.start,
    };

      this.provider.dadosApi(dados_relatorios,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let relatorio of data['result']){
          this.relatorios.push(relatorio);
        }
      }
        resolve(true);
      });
  });
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
