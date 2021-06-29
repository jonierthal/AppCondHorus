import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  nome: string = "";
  sobrenome: string = "";
  senha_crip: string = "";
  telefone: string = "";
  email: string = "";
  data_nascimento: string = "";
  senha_original: string = "";
  num_ap: string = "";
  id_funcao: string = "";
  id_usuario: string ="";
  num_box ="";
  apartamentos: any[];
  funcoes: any[];
  boxes: any[];
  dadosStorage: any;
  tipo_funcao: string;

  
  constructor(public toast: ToastController, private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id_usuario = data.id_usuario;
      this.nome = data.nome;
      this.sobrenome = data.sobrenome;
      this.senha_crip = data.senha_crip;
      this.senha_original = data.senha_original;
      this.telefone = data.telefone;
      this.email = data.email;
      this.data_nascimento = data.data_nascimento;
      this.num_ap = data.num_ap;
      this.id_funcao = data.id_funcao;
      this.num_box = data.num_box;
    });
  }

  ionViewWillEnter(){
    this.apartamentos = [];
    this.funcoes = [];
    this.boxes = [];
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
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso',
      duration: 1000
    });
    toast.present();
  }

  carregar(){

    return new Promise(resolve => {
      this.apartamentos = [];
      this.funcoes = [];
      this.boxes = [];
    let dados_ap = {
      requisicao : 'selecionar_apartamento'
    }
    let dados_box = {
      requisicao : 'selecionar_box'
    }
    let dados_funcao = {
      requisicao : 'selecionar_funcao'
    };
    

      this.provider.dadosApi(dados_ap,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let apartamento of data['result']){
          this.apartamentos.push(apartamento);
        }
      }
        resolve(true);
      });

      this.provider.dadosApi(dados_box,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let box of data['result']){
          this.boxes.push(box);
        }
      }
        resolve(true);
      });

      this.provider.dadosApi(dados_funcao,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let funcao of data['result']){
          this.funcoes.push(funcao);
        }
      }
        resolve(true);
      });
      
  });
}
  async cadastrar(){
    if(this.nome == null && this.sobrenome == null && this.senha_original == null && this.telefone == null && this.email == null
       && this.data_nascimento == null && this.num_ap == null && this.id_funcao == null && this.num_box == null){
      const toast = await this.toast.create({
        message: 'Atenção preencha todos os dados',
        duration:2000,
        color:'warning'
      });
      toast.present();
      return;
    }
    else if(this.nome == null ){
     const toast = await this.toast.create({
       message: 'Atenção preencha o nome',
       duration:2000,
       color:'warning'
     });
     toast.present();
     return;
   }
   else if(this.sobrenome == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha o sobrenome',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.senha_original == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha a senha',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.telefone == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha o telefone',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.email == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha o email',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.data_nascimento == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha a data de nascimento',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.num_ap == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha o apartamento',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.num_box == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha o box',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
  else if(this.id_funcao == null ){
    const toast = await this.toast.create({
      message: 'Atenção preencha a função',
      duration:2000,
      color:'warning'
    });
    toast.present();
    return;
  }
    else if(this.nome, this.sobrenome, this.senha_original, this.telefone, this.email, this.data_nascimento,
      this.num_ap, this.num_box, this.id_funcao){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'add_usuario',
        nome : this.nome,
        sobrenome : this.sobrenome,
        senha_original : this.senha_original,
        telefone: this.telefone,
        email: this.email,
        data_nascimento: this.data_nascimento,
        num_ap: this.num_ap,
        num_box : this.num_box,
        id_funcao : this.id_funcao,
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          this.router.navigate(['/tab-nav/listar-usuarios']);
          this.MensagemSalvar();
        })
    })
  }
  };
  
  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar',
        nome : this.nome,
        sobrenome : this.sobrenome,
        senha_original : this.senha_original,
        telefone: this.telefone,
        email: this.email,
        data_nascimento: this.data_nascimento,
        num_ap : this.num_ap,
        id_funcao : this.id_funcao,
        id_usuario: this.id_usuario,
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          this.router.navigate(['/tab-nav/home']);
          this.MensagemSalvar();
        })
        
    })

  };

}
