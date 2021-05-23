import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {

  usuarios: any[];
  limit: number = 15;
  start: number = 0;
  nome: string = "";

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
        requisicao : 'listar',
        nome : this.nome,
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
  
  editar(id_usuario, nome, sobrenome, senha_original, telefone, email, data_nascimento){
    this.router.navigate(['/tab-nav/add-usuario' + '/' + id_usuario + '/' + nome +  '/' + sobrenome + '/' + senha_original + '/' + telefone + '/' + email + '/' + data_nascimento]);
  }

  excluir(id_usuario){

    return new Promise(resolve => {
    let dados = {
      requisicao : 'excluir',
      id_usuario : id_usuario,
     };

      this.provider.dadosApi(dados,'/api.php').subscribe(data => {
        this.ionViewWillEnter(); 
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

