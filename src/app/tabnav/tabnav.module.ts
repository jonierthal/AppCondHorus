
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabnavPageRoutingModule } from './tabnav-routing.module';

import { TabnavPage } from './tabnav.page';

import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabnavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'recados',
        loadChildren: () => import('../recados/recados.module').then(m => m.RecadosPageModule)
      },
      {
        path: 'melhorias',
        loadChildren: () => import('../melhorias/melhorias.module').then(m => m.MelhoriasPageModule)
      },
      {
        path: 'regras',
        loadChildren: () => import('../regras/regras.module').then(m => m.RegrasPageModule)
      },
      {
        path: 'relatorios',
        loadChildren: () => import('../relatorios/relatorios.module').then(m => m.RelatoriosPageModule)
      },
      {
        path: 'listar-usuarios',
        loadChildren: () => import('../listar-usuarios/listar-usuarios.module').then(m => m.ListarUsuariosPageModule)
      },
      {
        path: 'cadastra-recados',
        loadChildren: () => import('../cadastra-recados/cadastra-recados.module').then(m => m.CadastraRecadosPageModule)
      },
      {
        path: 'cadastra-melhorias',
        loadChildren: () => import('../cadastra-melhorias/cadastra-melhorias.module').then(m => m.CadastraMelhoriasPageModule)
      },
      {
        path: 'cadastra-recados',
        loadChildren: () => import('../cadastra-recados/cadastra-recados.module').then(m => m.CadastraRecadosPageModule)
      },
      {
        path: 'equipe',
        loadChildren: () => import('../equipe/equipe.module').then(m => m.EquipePageModule)
      },
      {
        path: 'add-usuario/:id_usuario/:nome/:sobrenome/:senha_original/:telefone/:email/:data_nascimento',
        loadChildren: () => import('../add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
      },
      {
        path: 'add-usuario',
        loadChildren: () => import('../add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
      },
      {
        path: 'administrador',
        loadChildren: () => import('../administrador/administrador.module').then(m => m.AdministradorPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tab-nav/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabnavPage]
})
export class TabnavPageModule {}
