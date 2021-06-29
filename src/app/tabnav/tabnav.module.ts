
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
        path: 'manter-regras',
        loadChildren: () => import('../manter-regras/manter-regras.module').then(m => m.ManterRegrasPageModule)
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
        path: 'add-usuario/:id_usuario/:nome/:sobrenome/:senha_original/:telefone/:email/:data_nascimento/:num_ap/:num_box/:id_funcao',
        loadChildren: () => import('../add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
      },
      {
        path: 'cadastra-regras/:id_regras/:titulo_regra/:desc_regra',
        loadChildren: () => import('../cadastra-regras/cadastra-regras.module').then(m => m.CadastraRegrasPageModule)
      },
      {
        path: 'cadastra-relatorios/:id_relatorio/:titulo_relatorio/:desc_relatorio/:lk_relatorio',
        loadChildren: () => import('../cadastra-relatorios/cadastra-relatorios.module').then(m => m.CadastraRelatoriosPageModule)
      },
      {
        path: 'add-usuario',
        loadChildren: () => import('../add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
      },
      {
        path: 'administrador',
        loadChildren: () => import('../administrador/administrador.module').then(m => m.AdministradorPageModule)
      },
      {
        path: 'cadastra-regras',
        loadChildren: () => import('../cadastra-regras/cadastra-regras.module').then(m => m.CadastraRegrasPageModule)
      },
      {
        path: 'aprova-melhorias',
        loadChildren: () => import('../aprova-melhorias/aprova-melhorias.module').then(m => m.AprovaMelhoriasPageModule)
      },
      {
        path: 'manter-relatorios',
        loadChildren: () => import('../manter-relatorios/manter-relatorios.module').then(m => m.ManterRelatoriosPageModule)
      },
      {
        path: 'relatorios-gerais',
        loadChildren: () => import('../relatorios-gerais/relatorios-gerais.module').then(m => m.RelatoriosGeraisPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'cadastra-relatorios',
        loadChildren: () => import('../cadastra-relatorios/cadastra-relatorios.module').then(m => m.CadastraRelatoriosPageModule)
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
