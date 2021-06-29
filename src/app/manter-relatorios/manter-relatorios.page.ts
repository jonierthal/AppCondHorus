import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-manter-relatorios',
  templateUrl: './manter-relatorios.page.html',
  styleUrls: ['./manter-relatorios.page.scss'],
})
export class ManterRelatoriosPage implements OnInit {

  relatorios: any[];
  limit: number = 50;
  start: number = 0;

  constructor(public toast: ToastController, private router: Router, private provider: Post, private storage:NativeStorage) { }

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
      let dados = {
        requisicao : 'listar_relatorios',
        limit: this.limit,
        start: this.start
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
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
  
  editar(id_relatorio, titulo_relatorio, desc_relatorio, lk_relatorio){
    this.router.navigate(['/tab-nav/cadastra-relatorios' + '/' + id_relatorio + '/' + titulo_relatorio +  '/' + desc_relatorio + '/' + lk_relatorio]);
  }

  excluir(id_relatorio){

    return new Promise(async resolve => {
    let dados = {
      requisicao : 'excluir_relatorio',
      id_relatorio : id_relatorio,
     };

      this.provider.dadosApi(dados,'/api.php').subscribe(data => {
        this.ionViewWillEnter(); 
      });

      const toast = await this.toast.create({
        message: 'Relatório excluido com sucesso!',
        duration:2000,
        color:'primary'
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

