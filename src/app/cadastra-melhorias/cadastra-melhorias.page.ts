import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-cadastra-melhorias',
  templateUrl: './cadastra-melhorias.page.html',
  styleUrls: ['./cadastra-melhorias.page.scss'],
})
export class CadastraMelhoriasPage implements OnInit {

  titulo_melhoria: string = "";
  desc_melhoria: string = "";
  id_status = 6;
  dadosStorage: any;
  id_usuario: number;

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router,
  private actRouter: ActivatedRoute, private provider: Post) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.titulo_melhoria = data.titulo_melhoria;
      this.desc_melhoria = data.desc_melhoria;
    });
  }

  ionViewWillEnter(){
    
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.id_usuario = this.dadosStorage.id_usuario;
      })
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

    async MensagemSalvar() {
      const toast = await this.toast.create({
        message: 'Melhoria salva com sucesso',
        duration: 1000
      });
      toast.present();
    }

    async cadastrar(){
      if(this.titulo_melhoria == null && this.desc_melhoria == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha todos os dados',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.titulo_melhoria == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha o título',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.desc_melhoria == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha a descrição',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.titulo_melhoria,this.desc_melhoria){
      return new Promise(resolve => {
        let dados = {
          requisicao : 'add_melhoria',
          titulo_melhoria : this.titulo_melhoria,
          desc_melhoria : this.desc_melhoria,
          id_usuario : this.id_usuario,
        };
        
  
          this.provider.dadosApi(dados,'/api.php').subscribe(data => {
            this.router.navigate(['/tab-nav/home']);
            this.MensagemSalvar();
            console.log(this.id_status);
          })
      })
  
    };
  }
}
