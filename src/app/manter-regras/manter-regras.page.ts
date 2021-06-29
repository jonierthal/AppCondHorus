import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-manter-regras',
  templateUrl: './manter-regras.page.html',
  styleUrls: ['./manter-regras.page.scss'],
})
export class ManterRegrasPage implements OnInit {

  regras: any[];
  limit: number = 50;
  start: number = 0;

  constructor(public toast: ToastController, private router: Router, private provider: Post, private storage:NativeStorage) { }

  ngOnInit() {

    
  }

  ionViewWillEnter(){
    this.regras = [];
    this.start = 0;
    this.carregar();

  }

  carregar(){

      return new Promise(resolve => {
        this.regras = [];
      let dados = {
        requisicao : 'listar_regras',
        limit: this.limit,
        start: this.start
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          if(data['result'] == '0'){
            alert('Não possui mais dados');
          }
          else{
          for(let regra of data['result']){
            this.regras.push(regra);

          }
        }
          resolve(true);
        });
    });
  }
  
  editar(id_regras, titulo_regra, desc_regra){
    this.router.navigate(['/tab-nav/cadastra-regras' + '/' + id_regras + '/' + titulo_regra +  '/' + desc_regra]);
  }

  excluir(id_regras){

    return new Promise(async resolve => {
    let dados = {
      requisicao : 'excluir_regra',
      id_regras : id_regras,
     };

      this.provider.dadosApi(dados,'/api.php').subscribe(data => {
        this.ionViewWillEnter(); 
      });

      const toast = await this.toast.create({
        message: 'Regra excluida com sucesso!',
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

