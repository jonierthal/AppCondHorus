import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {


  constructor(public toast: ToastController, private router: Router, private provider: Post, private storage:NativeStorage) { }

  ngOnInit() {
 
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

}
