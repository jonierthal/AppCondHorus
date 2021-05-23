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
  titulo_recado: string = "";

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router,private provider: Post) { }


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.recados = [];
    this.start = 0;
    this.carregar();

  }

  carregar(){

    return new Promise(resolve => {
      this.recados = [];
    let dados = {
      requisicao : 'listar_recado',
      titulo_recado : this.titulo_recado,
      limit: this.limit,
      start: this.start,
    };

      this.provider.dadosApi(dados,'/api.php').subscribe(data => {
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
  
doRefresh(event) {

  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
}

loadData(event) {

  this.start = this.limit;

  setTimeout(() => {
    this.carregar().then(()=>{
    event.target.complete();
    });

  }, 1000);

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
