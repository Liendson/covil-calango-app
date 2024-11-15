import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HistoricoPage } from './pages/menu-pages/historico/historico.page';
import { HomePage } from './pages/home/home.page';
import { PerfilPage } from './pages/menu-pages/perfil/perfil.page';
import { LoginPage } from './pages/login/login.page';
import { LoginGuard } from './guards/login.guard';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { MeusTorneiosPage } from './pages/meus-torneios/meus-torneios.page';
import { MeusPedidosPage } from './pages/meus-pedidos/meus-pedidos.page';
import { DadosLigaPage } from './pages/dados-liga/dados-liga.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [LoginGuard]
  },
  {
    path: 'perfil',
    component: PerfilPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'historico',
    component: HistoricoPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'cardapio',
    component: CardapioPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'meus-pedidos',
    component: MeusPedidosPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'meus-torneios',
    component: MeusTorneiosPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'dados-liga',
    component: DadosLigaPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginPage
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
