import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HistoricoPage } from './pages/menu-pages/historico/historico.page';
import { HomePage } from './pages/home/home.page';
import { NotificacoesPage } from './pages/menu-pages/notificacoes/notificacoes.page';
import { PerfilPage } from './pages/menu-pages/perfil/perfil.page';
import { ConfiguracoesPage } from './pages/menu-pages/configuracoes/configuracoes.page';
import { MeusTorneiosPage } from './pages/meus-torneios/meus-torneios.page';
import { RealizarInscricaoPage } from './pages/realizar-inscricao/realizar-inscricao.page';
import { CriarTorneioPage } from './pages/criar-torneio/criar-torneio.page';
import { RodadasPage } from './pages/rodadas/rodadas.page';
import { FinalTorneioPage } from './pages/final-torneio/final-torneio.page';
import { LoginPage } from './pages/login/login.page';
import { RegistrarPage } from './pages/registrar/registrar.page';
import { LoginGuard } from './guards/login.guard';

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
    path: 'notificacoes',
    component: NotificacoesPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'configuracoes',
    component: ConfiguracoesPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'historico',
    component: HistoricoPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'meus-torneios',
    component: MeusTorneiosPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'criar-torneio',
    component: CriarTorneioPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'registrar',
    component: RegistrarPage
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
