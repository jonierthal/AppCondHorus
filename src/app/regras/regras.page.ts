import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.page.html',
  styleUrls: ['./regras.page.scss'],
})
export class RegrasPage implements OnInit {

  regras: any[];
  limit: number = 42;
  start: number = 0;

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router,private provider: Post ) {}
  

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
    let dados_regras = {
      requisicao : 'listar_regras',
      limit: this.limit,
      start: this.start,
    };

      this.provider.dadosApi(dados_regras,'/api.php').subscribe(data => {
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
