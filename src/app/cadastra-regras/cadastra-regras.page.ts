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

  constructor(public toast: ToastController, private storage:NativeStorage, private router:Router, private actRouter: ActivatedRoute, private provider: Post) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.titulo_regra = data.titulo_regra;
      this.desc_regra = data.desc_regra;
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

    cadastrar(){
      return new Promise(resolve => {
        let dados = {
          requisicao : 'add_regra',
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

