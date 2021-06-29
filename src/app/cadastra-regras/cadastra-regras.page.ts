import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-cadastra-regras',
  templateUrl: './cadastra-regras.page.html',
  styleUrls: ['./cadastra-regras.page.scss'],
})
export class CadastraRegrasPage implements OnInit {

  titulo_regra: string = "";
  desc_regra: string = "";
  id_regras: string = "";
  dadosStorage: any;
  id_usuario: number;

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router, private actRouter: ActivatedRoute, private provider: Post) { }

  
  ionViewWillEnter(){
    
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.id_usuario = this.dadosStorage.id_usuario;
      })
    }
  

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.titulo_regra = data.titulo_regra;
      this.desc_regra = data.desc_regra;
      this.id_regras = data.id_regras;
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

    async MensagemSalvar() {
      const toast = await this.toast.create({
        message: 'Regra salva com sucesso',
        duration: 1000
      });
      toast.present();
    }

    async cadastrar(){

      if(this.titulo_regra == null && this.desc_regra == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha todos os dados',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.titulo_regra == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha o título',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.desc_regra == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha a descrição',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.titulo_regra,this.desc_regra){
      return new Promise(resolve => {
        let dados = {
          requisicao : 'add_regra',
          titulo_regra : this.titulo_regra,
          desc_regra : this.desc_regra,
          id_usuario : this.id_usuario,
        };
  
          this.provider.dadosApi(dados,'/api.php').subscribe(data => {
            this.router.navigate(['/tab-nav/regras']);
            this.MensagemSalvar();
          })
      })
  
    };
  }

  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar_regra',
        id_regras : this.id_regras,
        titulo_regra : this.titulo_regra,
        desc_regra : this.desc_regra,
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          this.router.navigate(['/tab-nav/regras']);
          this.MensagemSalvar();
        })
        
    })

  };
}

