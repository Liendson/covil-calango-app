import { LOCALE_ID, NgModule } from '@angular/core';
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
import { PerfilPage } from './pages/menu-pages/perfil/perfil.page';
import { MeusTorneiosPage } from './pages/meus-torneios/meus-torneios.page';
import { HttpClientModule } from '@angular/common/http';
import { ModalEditarPerfilPage } from './pages/menu-pages/perfil/modal-editar-perfil/modal-editar-perfil.page';
import { ModalInformacoesPage } from './pages/menu-pages/perfil/modal-informacoes/modal-informacoes.page';
import { LoginPage } from './pages/login/login.page';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { DadosLigaPage } from './pages/dados-liga/dados-liga.page';
import { MeusPedidosPage } from './pages/meus-pedidos/meus-pedidos.page';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ModalConfirmarPedidoPage } from './pages/cardapio/modal-confirmar-pedido/modal-confirmar-pedido.page';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt);

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
    LoginPage,
    HomePage,
    CardapioPage,
    PerfilPage,
    HistoricoPage,
    MeusTorneiosPage,
    MeusPedidosPage,
    DadosLigaPage,
    // Modais
    ModalEditarPerfilPage,
    ModalInformacoesPage,
    ModalConfirmarPedidoPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
