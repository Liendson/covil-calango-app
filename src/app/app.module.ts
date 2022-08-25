import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionHistoricoComponent } from './components/accordion-historico/accordion-historico.component';
import { AccordionNotificacaoComponent } from './components/accordion-notificacao/accordion-notificacao.component';
import { AccordionTorneioComponent } from './components/accordion-torneio/accordion-torneio.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HistoricoPage } from './pages/menu-pages/historico/historico.page';
import { HomePage } from './pages/home/home.page';
import { NotificacoesPage } from './pages/menu-pages/notificacoes/notificacoes.page';
import { PerfilPage } from './pages/menu-pages/perfil/perfil.page';
import { ConfiguracoesPage } from './pages/menu-pages/configuracoes/configuracoes.page';
import { CriarTorneioPage } from './pages/criar-torneio/criar-torneio.page';
import { FinalTorneioPage } from './pages/final-torneio/final-torneio.page';
import { MeusTorneiosPage } from './pages/meus-torneios/meus-torneios.page';
import { RealizarInscricaoPage } from './pages/realizar-inscricao/realizar-inscricao.page';
import { RodadasPage } from './pages/rodadas/rodadas.page';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddJogadorPage } from './pages/criar-torneio/modal-add-jogador/modal-add-jogador.page';
import { ModalCreditosPage } from './pages/menu-pages/configuracoes/modal-creditos/modal-creditos.page';
import { ModalEditarPerfilPage } from './pages/menu-pages/configuracoes/modal-editar-perfil/modal-editar-perfil.page';
import { ModalInformacoesPage } from './pages/menu-pages/configuracoes/modal-informacoes/modal-informacoes.page';

@NgModule({
  declarations: [
    // Componentes
    AppComponent,
    TabsComponent,
    HeaderComponent,
    MenuCardComponent,
    AccordionTorneioComponent,
    AccordionNotificacaoComponent,
    AccordionHistoricoComponent,
    // Páginas
    HomePage,
    PerfilPage,
    ConfiguracoesPage,
    HistoricoPage,
    NotificacoesPage,
    CriarTorneioPage,
    FinalTorneioPage,
    MeusTorneiosPage,
    RealizarInscricaoPage,
    RodadasPage,
    // Modais
    ModalAddJogadorPage,
    ModalCreditosPage,
    ModalEditarPerfilPage,
    ModalInformacoesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
