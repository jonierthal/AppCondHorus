import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nome : string = null;
  senha : string = null;
  dadosStorage: any;
  tipo_funcao: string;
  
  constructor(private nativestorage: NativeStorage, private router:Router, private provider: Post, public toast: ToastController) { }
  
  ngOnInit() {
  }

  ionViewWillEnter(){

    this.nativestorage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.tipo_funcao = this.dadosStorage.tipo_funcao;
      })
  }

  async Login(){
      if(this.nome == null && this.senha == null){
        const toast = await this.toast.create({
          message: 'ERRO: Informe Usuário e Senha',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.nome == null){
        const toast = await this.toast.create({
          message: 'ERRO: Informe o Usuário',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
    }  
      else if(this.senha == null){
          const toast = await this.toast.create({
            message: 'ERRO: Informe a senha',
            duration:2000,
            color:'warning'
          });
          toast.present();
          return;
      }  

      let dados = {
        
        requisicao : 'login',
        nome : this.nome,
        senha: this.senha,
      };

      this.provider.dadosApi(dados,'/api.php').subscribe(async data => {
        var alert = data['msg'];
        
        if(data['success']){
          
          this.nativestorage.setItem('session_storage',data['result']);
          
          this.router.navigate(['/tab-nav/home']);
          const toast = await this.toast.create({
            message: 'Logado com sucesso',
            duration:1000,
            color: 'success'
          });
          toast.present();
                   
          this.nome = null;
          this.senha = null;
        }
        else{
          const toast = await this.toast.create({
            message: alert,
            duration:2000,
            color: 'danger'
          });
          toast.present();
        }
        
      });
  }
  

}
