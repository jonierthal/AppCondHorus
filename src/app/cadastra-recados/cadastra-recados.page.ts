import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-cadastra-recados',
  templateUrl: './cadastra-recados.page.html',
  styleUrls: ['./cadastra-recados.page.scss'],
})
export class CadastraRecadosPage implements OnInit {

  titulo_recado: string = "";
  desc_recado: string = "";
  dadosStorage: any;
  tipo_funcao: string;
  nome: string;
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
      this.titulo_recado = data.titulo_recado;
      this.desc_recado = data.desc_recado;
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
        message: 'Recado salvo com sucesso',
        duration: 1000
      });
      toast.present();
    }

    async cadastrar(){

      if(this.titulo_recado == null && this.desc_recado == null){
       const toast = await this.toast.create({
         message: 'Atenção preencha todos os dados',
         duration:2000,
         color:'warning'
       });
       toast.present();
       return;
     }
     else if(this.titulo_recado == null){
      const toast = await this.toast.create({
        message: 'Atenção preencha o título',
        duration:2000,
        color:'warning'
      });
      toast.present();
      return;
    }
    else if(this.desc_recado == null){
      const toast = await this.toast.create({
        message: 'Atenção preencha a descrição',
        duration:2000,
        color:'warning'
      });
      toast.present();
      return;
    }
    else if(this.titulo_recado,this.desc_recado){
      return new Promise(resolve => {
        let dados = {
          requisicao : 'add_recado',
          titulo_recado : this.titulo_recado,
          desc_recado : this.desc_recado,
          id_usuario : this.id_usuario,
        };
  
          this.provider.dadosApi(dados,'/api.php').subscribe(data => {
            this.router.navigate(['/tab-nav/recados']);
            this.MensagemSalvar();

            console.log('ola',this.titulo_recado, this.desc_recado, this.id_usuario);
          })
      })
  
    };
  }

}
