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

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router,
  private actRouter: ActivatedRoute, private provider: Post) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.titulo_melhoria = data.titulo_melhoria;
      this.desc_melhoria = data.desc_melhoria;
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
        message: 'Melhoria salva com sucesso',
        duration: 1000
      });
      toast.present();
    }

    cadastrar(){
      return new Promise(resolve => {
        let dados = {
          requisicao : 'add_melhoria',
          titulo_melhoria : this.titulo_melhoria,
          desc_melhoria : this.desc_melhoria,
        };
  
          this.provider.dadosApi(dados,'/api.php').subscribe(data => {
            this.router.navigate(['/tab-nav/melhorias']);
            this.MensagemSalvar();
          })
      })
  
    };

}
