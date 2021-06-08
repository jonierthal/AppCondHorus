import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  styleUrls: ['./equipe.page.scss'],
})
export class EquipePage implements OnInit {

  usuarios: any[];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  id_funcao: string = "";

  constructor(public toast: ToastController, private router: Router, private provider: Post, private storage:NativeStorage) { }

  ngOnInit() {

    
  }

  ionViewWillEnter(){
    this.usuarios = [];
    this.start = 0;
    this.carregar();

  }

  addUsuarios(){

    this.router.navigate(['/tab-nav/add-usuario']);

  }

  carregar(){

      return new Promise(resolve => {
        this.usuarios = [];
      let dados = {
        requisicao : 'listar_equipe',
        nome : this.nome,
        id_funcao : this.id_funcao,
        limit: this.limit,
        start: this.start
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          if(data['result'] == '0'){
            alert('Não possui mais dados');
          }
          else{
          for(let usuario of data['result']){
            this.usuarios.push(usuario);

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

