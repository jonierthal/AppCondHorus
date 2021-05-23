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
  //apartamento: string = "";
  //nivel: string = "";
  id_usuario: string ="";
  
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
      //this.apartamento = data.apartamento;
      //this.nivel = data.nivel;
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
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso',
      duration: 1000
    });
    toast.present();
  }


  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'add',
        nome : this.nome,
        sobrenome : this.sobrenome,
        senha_crip : this.senha_crip,
        telefone: this.telefone,
        email: this.email,
        data_nascimento: this.data_nascimento,
       // apartamento: this.apartamento,
       // nivel : this.nivel,
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          this.router.navigate(['/tab-nav/listar-usuarios']);
          this.MensagemSalvar();
        })
    })

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
       // apartamento : this.apartamento,
       // nivel : this.nivel,
       id_usuario: this.id_usuario,
      };

        this.provider.dadosApi(dados,'/api.php').subscribe(data => {
          this.router.navigate(['/tab-nav/relatorios']);
          this.MensagemSalvar();
          console.log("aqui",this.senha_original,this.sobrenome,this.telefone,this.email);
        })
        
    })

  };

}
