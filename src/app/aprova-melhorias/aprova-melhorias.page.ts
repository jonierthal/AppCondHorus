import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aprova-melhorias',
  templateUrl: './aprova-melhorias.page.html',
  styleUrls: ['./aprova-melhorias.page.scss'],
})
export class AprovaMelhoriasPage implements OnInit {

  melhorias: any[];
  status: any[];
  responsaveis: any[];
  limit: number = 15;
  start: number = 0;
  id_status: number;
  id_responsavel: number;
  id_melhoria: number;
  desc_feedback: string = "";
  dadosStorage: any;
  tipo_funcao: string;

  constructor(public toast:ToastController,  private storage:NativeStorage, private actRouter: ActivatedRoute, private router:Router, private provider: Post) { }
  
  

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id_status = data.id_status;
      this.id_responsavel = data.id_responsavel;
      this.id_melhoria = data.id_melhoria;
      this.desc_feedback = data.desc_feedback
    });
  }

  ionViewWillEnter(){
    this.melhorias = [];
    this.responsaveis = [];
    this.status = [];
    this.start = 0;
    this.carregar();

    this.storage.getItem('session_storage').then((res)=>{
      this.dadosStorage = res;
      this.tipo_funcao = this.dadosStorage.tipo_funcao;
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
      message: 'Salvo com sucesso',
      duration: 1000
    });
    toast.present();
  }

  carregar(){

    return new Promise(resolve => {
      this.melhorias = [];
      this.responsaveis = [];
    let dados_melhorias = {
      requisicao : 'listar_aprova_melhoria',
      limit: this.limit,
      start: this.start,
    }
    let dados_responsaveis = {
      requisicao : 'listar_equipe',
      limit: this.limit,
      start: this.start,
    }
    let dados_status = {
      requisicao : 'selecionar_status',
    };

      this.provider.dadosApi(dados_melhorias,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let melhoria of data['result']){
          this.melhorias.push(melhoria);
        }
      }
        resolve(true);
      });
      
      this.provider.dadosApi(dados_responsaveis,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let responsavel of data['result']){
          this.responsaveis.push(responsavel);
        }
      }
        resolve(true);
      });
      this.provider.dadosApi(dados_status,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let statu of data['result']){
          this.status.push(statu);
        }
      }
        resolve(true);
      });
  });
}

  async cadastrar(){

  if(this.id_status == null && this.id_responsavel == null && this.id_melhoria == null && this.desc_feedback == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha todos os dados',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_melhoria == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha a melhoria',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_responsavel == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha o responsavel',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_status == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha o status',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.desc_feedback == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha o feedback',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_melhoria, this.id_responsavel, this.id_status){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'add_aprova_melhoria',
      id_status : this.id_status,
      id_responsavel : this.id_responsavel,
      id_melhoria: this.id_melhoria,
      desc_feedback: this.desc_feedback,
    };

      this.provider.dadosApi(dados,'/api.php').subscribe(data => {
        this.router.navigate(['/tab-nav/melhorias']);
        console.log("responsavel",this.id_responsavel, this.id_status, this.id_melhoria, this.desc_feedback);
        this.MensagemSalvar();
      })
  })

};
  
}

async editar(){

  if(this.id_status == null && this.id_melhoria == null && this.desc_feedback == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha todos os dados',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_melhoria == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha a melhoria',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_status == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha o status',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.desc_feedback == null){
    const toast = await this.toast.create({
      message: 'Atenção preencha o feedback',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_melhoria, this.id_status){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'edita_aprova_melhoria',
      id_status : this.id_status,
      id_melhoria: this.id_melhoria,
      desc_feedback: this.desc_feedback,
    };

      this.provider.dadosApi(dados,'/api.php').subscribe(data => {
        this.router.navigate(['/tab-nav/melhorias']);
        console.log(this.id_status, this.id_melhoria, this.desc_feedback);
        this.MensagemSalvar();
      })
  })

};
  
}
}
