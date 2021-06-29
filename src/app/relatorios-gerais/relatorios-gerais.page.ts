import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { Platform, ToastController } from '@ionic/angular';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core'
const { Filesystem, Share } = Plugins;
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorios-gerais',
  templateUrl: './relatorios-gerais.page.html',
  styleUrls: ['./relatorios-gerais.page.scss'],
})
export class RelatoriosGeraisPage implements OnInit {

  selRelatorio: string = "";
  melhorias: any[];
  recados: any[];
  limit: number = 15;
  start: number = 0;
  pdfOjb = null;
  pdfBase64: any;

  constructor(private nativestorage: NativeStorage, private router: Router, public fileOpener: FileOpener,private plt: Platform, public toastCtrl: ToastController, private provider: Post) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.melhorias = [];
    this.recados = [];
    this.start = 0;
  }


  GerarPDF_Recados(nome,sobrenome, titulo, descricao, data){

    const docDef = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [
        {text: 'AppCondHorus', style: 'header'},
        {text: 'Relatório de Recados:', style: 'subheader'},
        {
          style: 'tableExample',
          table: {
            body: [
              [{text: titulo, style: 'tableHeader'}],
              [descricao],
              [nome + ' ' + sobrenome],
              ['Data - ' + data]
            ]
          }
        }],
        styles: {
          header: {
            fontSize: 35,
            bold: true,
            margin: [0, 0, 0, 10],
            alignment: 'center'
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
            alignment: 'center'
          },
          tableExample: {
            margin: [0, 5, 0, 15],
            alignment: 'center'
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
          }
        }
    }
     this.pdfOjb = pdfMake.createPdf(docDef);

     if (this.plt.is('cordova')) {
      this.pdfOjb.getBase64((data) => {
        this.pdfBase64 = data;
        console.log(this.pdfBase64);
      });
    }

    const { Filesystem } = Plugins;

    if (this.plt.is('cordova')) {
      console.log('3');
        // Save the PDF to the data Directory of our App
        const fileName = 'relatorio_recados.pdf';
        try {
          Filesystem.writeFile({
            path: fileName,
            data: this.pdfBase64,
            directory: FilesystemDirectory.Data,
          }).then((writeFileResult) => {
            console.log('File Written');
            Filesystem.getUri({
                directory: FilesystemDirectory.Data,
                path: fileName
            }).then((getUriResult) => {
                console.log(getUriResult);
                const path = getUriResult.uri;
                this.fileOpener.open(path, 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(error => console.log('Error openening file', error));
            }, (error) => {
                console.log(error);
            });
          });
          console.log('writeFile complete');
        } catch (error) {
          console.error('Unable to write file', error);
        }
      }else {
        this.pdfOjb.download('relatorio_recados.pdf');
    }
  }


  GerarPDF_Melhorias(titulo, nome_solicitante, sobrenome_solicitante, data, descricao,nome_responsavel,
    sobrenome_responsavel,status,feedback){
  
      const docDef = {
        content: [
          {text: 'AppCondHorus', style: 'header'},
          {text: 'Relatório de Melhorias:', style: 'subheader'},
          {
            style: 'tableExample',
            table: {
              body: [
                [{text: titulo, style: 'tableHeader', colSpan: 2, alignment: 'center'},{}],
					      [{text: 'Solicitante: ' + nome_solicitante + ' ' + sobrenome_solicitante, alignment: 'center'}, {text: 'Data solicitação: ' + data, style: 'tableHeader', alignment: 'center'}],
					      [{text: descricao, style: 'tableHeader', colSpan: 2, alignment: 'center'},{}],
                [{text: 'Responsável: ' + nome_responsavel + ' ' + sobrenome_responsavel, alignment: 'center'}, {text: 'Situação :' + status, style: 'tableHeader', alignment: 'center'}],
                [{text: 'Feedback : ' + feedback, style: 'tableHeader', colSpan: 2, alignment: 'center'},{}],
              ]
            }
          }],
          styles: {
            header: {
              fontSize: 35,
              bold: true,
              margin: [0, 0, 0, 10],
              alignment: 'center'
            },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5],
              alignment: 'center'
            },
            tableExample: {
              margin: [0, 5, 0, 15],
              alignment: 'center'
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black'
            }
          }
      }
  
      this.pdfOjb = pdfMake.createPdf(docDef);

     if (this.plt.is('cordova')) {
      this.pdfOjb.getBase64((data) => {
        this.pdfBase64 = data;
        console.log(this.pdfBase64);
      });
    }

    const { Filesystem } = Plugins;

    if (this.plt.is('cordova')) {
      console.log('3');
        // Save the PDF to the data Directory of our App
        const fileName = 'relatorio_melhorias.pdf';
        try {
          Filesystem.writeFile({
            path: fileName,
            data: this.pdfBase64,
            directory: FilesystemDirectory.Data,
          }).then((writeFileResult) => {
            console.log('File Written');
            Filesystem.getUri({
                directory: FilesystemDirectory.Data,
                path: fileName
            }).then((getUriResult) => {
                console.log(getUriResult);
                const path = getUriResult.uri;
                this.fileOpener.open(path, 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(error => console.log('Error openening file', error));
            }, (error) => {
                console.log(error);
            });
          });
          console.log('writeFile complete');
        } catch (error) {
          console.error('Unable to write file', error);
        }
      }else {
        this.pdfOjb.download('relatorio_melhorias.pdf');
    }
  }

  Confirma() {
    console.log(this.selRelatorio);
    if (this.selRelatorio == 'melhorias'){
      return new Promise(resolve => {
        this.melhorias = [];
      let dados_melhorias = {
        requisicao : 'listar_melhoria',
        limit: this.limit,
        start: this.start,
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
    });
  }
  else if(this.selRelatorio == 'recados'){
    return new Promise(resolve => {
      this.recados = [];
    let dados_recado = {
      requisicao : 'listar_recado',
      limit: this.limit,
      start: this.start,
    };

      this.provider.dadosApi(dados_recado,'/api.php').subscribe(data => {
        if(data['result'] == '0'){
          alert('Não possui mais dados');
        }
        else{
        for(let recado of data['result']){
          this.recados.push(recado);
        }
      }
        resolve(true);
      });
  });
  }
    }

    async logout(){
      this.nativestorage.clear();
      this.router.navigate(['/login']);
      const toast = await this.toastCtrl.create({
        message: 'Usuário deslogado!',
        duration:2000,
        color:'primary'
      });
      toast.present();
      }
  
    
  }
