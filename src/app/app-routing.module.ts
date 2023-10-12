import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'primeiro-acesso',
    loadChildren: () => import('./pages/primeiro-acesso/primeiro-acesso.module').then( m => m.PrimeiroAcessoPageModule)
  },
  {
    path: 'meus-animais',
    loadChildren: () => import('./pages/meus-animais/meus-animais.module').then( m => m.MeusAnimaisPageModule)
  },
  {
    path: 'cadastro-animal',
    loadChildren: () => import('./pages/cadastro-animal/cadastro-animal.module').then( m => m.CadastroAnimalPageModule)
  },
  {
    path: 'editar-animal/:id',
    loadChildren: () => import('./pages/editar-animal/editar-animal.module').then( m => m.EditarAnimalPageModule)
  },
  {
    path: 'solicitar/:id',
    loadChildren: () => import('./pages/solicitar/solicitar.module').then( m => m.SolicitarPageModule)
  },
  {
    path: 'historico-consulta',
    loadChildren: () => import('./pages/historico-consulta/historico-consulta.module').then( m => m.HistoricoConsultaPageModule)
  },
  {
    path: 'consultas-agendadas',
    loadChildren: () => import('./pages/consultas-agendadas/consultas-agendadas.module').then( m => m.ConsultasAgendadasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
