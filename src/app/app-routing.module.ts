import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'',
    loadChildren: () => import('./tabnav/tabnav.module').then(m => m.TabnavPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'cadastra-recados',
    loadChildren: () => import('./cadastra-recados/cadastra-recados.module').then( m => m.CadastraRecadosPageModule)
  },

  {
    path: 'cadastra-melhorias',
    loadChildren: () => import('./cadastra-melhorias/cadastra-melhorias.module').then( m => m.CadastraMelhoriasPageModule)
  },
  {
    path: 'cadastra-regras',
    loadChildren: () => import('./cadastra-regras/cadastra-regras.module').then( m => m.CadastraRegrasPageModule)
  },
  {
    path: 'cadastra-relatorios',
    loadChildren: () => import('./cadastra-relatorios/cadastra-relatorios.module').then( m => m.CadastraRelatoriosPageModule)
  },
  {
    path: 'aprova-melhorias',
    loadChildren: () => import('./aprova-melhorias/aprova-melhorias.module').then( m => m.AprovaMelhoriasPageModule)
  },
  {
    path: 'manter-regras',
    loadChildren: () => import('./manter-regras/manter-regras.module').then( m => m.ManterRegrasPageModule)
  },
  {
    path: 'manter-relatorios',
    loadChildren: () => import('./manter-relatorios/manter-relatorios.module').then( m => m.ManterRelatoriosPageModule)
  },
  {
    path: 'relatorios-gerais',
    loadChildren: () => import('./relatorios-gerais/relatorios-gerais.module').then( m => m.RelatoriosGeraisPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  /*,
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recados',
    loadChildren: () => import('./recados/recados.module').then( m => m.RecadosPageModule)
  },
  {
    path: 'regras',
    loadChildren: () => import('./regras/regras.module').then( m => m.RegrasPageModule)
  },
  {
    path: 'melhorias',
    loadChildren: () => import('./melhorias/melhorias.module').then( m => m.MelhoriasPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./equipe/equipe.module').then( m => m.EquipePageModule)
  },
  {
    path: 'tabnav',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },*/
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
