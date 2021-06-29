import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarios: any[];
  id_usuario: number;
  dadosStorage: any;
  nome: string;
  tipo_funcao: string;
  sobrenome: string;
  telefone: string;
  email: string;
  data_nascimento: string;
  num_ap: string;
  num_box: string;
  senha: string;

  constructor(private nativestorage: NativeStorage,private provider: Post,public toast: ToastController, private router: Router) { }

  ngOnInit() {
  }

  carregar(){
    console.log("entrou");
    this.usuarios = [];
    this.nativestorage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.id_usuario = this.dadosStorage.id_usuario;
      });  
    return new Promise(resolve => {
      this.usuarios = [];
    let dados = {
      requisicao : 'listar_usuarios_perfil',
      id_usuario : this.id_usuario,
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

  Edita_usuario(id_usuario, nome, sobrenome, senha_original, telefone, email, data_nascimento,num_ap,num_box,id_funcao){
    this.router.navigate(['/tab-nav/add-usuario' + '/' + id_usuario + '/' + nome +  '/' + sobrenome + '/' + senha_original + '/' + telefone + '/' + email + '/' + data_nascimento + '/' + num_ap + '/'  + '/' + num_box + '/' + id_funcao]);
  }

  async logout(){
    this.nativestorage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toast.create({
      message: 'Usuário deslogado!',
      duration:2000,
      color:'primary'
    });
    toast.present();
    }

}


