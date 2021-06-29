import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-cadastra-relatorios',
  templateUrl: './cadastra-relatorios.page.html',
  styleUrls: ['./cadastra-relatorios.page.scss'],
})
export class CadastraRelatoriosPage implements OnInit {

  id_relatorio: string = "";
  titulo_relatorio: string = "";
  desc_relatorio: string = "";
  lk_relatorio: string = "";
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
      this.titulo_relatorio = data.titulo_relatorio;
      this.desc_relatorio = data.desc_relatorio;
      this.lk_relatorio = data.lk_relatorio;
      this.id_relatorio = data.id_relatorio
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
        message: 'Relatório salvo com sucesso',
        duration: 1000
      });
      toast.present();
    }

    async cadastrar(){
      
      if(this.titulo_relatorio == null && this.desc_relatorio == null && this.lk_relatorio == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha todos os dados',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.titulo_relatorio == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha o título',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.desc_relatorio == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha a descrição',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.lk_relatorio == null){
        const toast = await this.toast.create({
          message: 'Atenção preencha o link',
          duration:2000,
          color:'warning'
        });
        toast.present();
        return;
      }
      else if(this.titulo_relatorio, this.desc_relatorio, this.lk_relatorio){
      return new Promise(resolve => {
        let dados_relatorios = {
          requisicao : 'add_relatorio',
          titulo_relatorio : this.titulo_relatorio,
          desc_relatorio : this.desc_relatorio,
          lk_relatorio : this.lk_relatorio,
          id_usuario : this.id_usuario,
        };
  
          this.provider.dadosApi(dados_relatorios,'/api.php').subscribe(data => {
            this.router.navigate(['/tab-nav/relatorios']);
            this.MensagemSalvar();
          })
      })
  
    };
  }

  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar_relatorio',
        id_relatorio : this.id_relatorio,
        titulo_relatorio : this.titulo_relatorio,
        desc_relatorio : this.desc_relatorio,
        lk_relatorio : this.lk_relatorio,
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          this.router.navigate(['/tab-nav/relatorios']);
          this.MensagemSalvar();
        })
        
    })

  };
  
}

