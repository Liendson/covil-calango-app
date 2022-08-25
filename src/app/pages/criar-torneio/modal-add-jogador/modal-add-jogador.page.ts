import { Component, OnInit } from '@angular/core';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { GenericClass } from 'src/app/utils/generic.class';
import { CriarTorneioPage } from '../criar-torneio.page';

@Component({
  selector: 'app-modal-add-jogador',
  templateUrl: './modal-add-jogador.page.html',
  styleUrls: ['./modal-add-jogador.page.scss'],
})
export class ModalAddJogadorPage extends GenericClass implements OnInit {

  public listJogadores: JogadorDTO[] = [];
  public listJogadoresFiltrados: JogadorDTO[] = this.listJogadores;

  ngOnInit(): void {
    this.jogadorService.getAll().subscribe((jogadores: JogadorDTO[]) => {
      this.listJogadores = jogadores;
      this.listJogadores.forEach(jogador => {
        CriarTorneioPage.listaDeJogadoresIncluidos.forEach(jogadorLista => {
          jogador.adicionado = (jogadorLista.nome === jogador.nome)
        });
      })
    })
  }

  getItems(event) {
    const value = event.target.value;
    (value && value.trim() != '')
      ? this.listJogadoresFiltrados = this.listJogadores.filter(item => (item.nome.toLowerCase().indexOf(value.toLowerCase()) > -1))
      : this.listJogadoresFiltrados = this.listJogadores;
  }

  adicionarJogador(i) {
    this.listJogadores[i].adicionado = true;
    CriarTorneioPage.listaDeJogadoresIncluidos.push(this.listJogadores[i]);
  }

  removerJogador(i) {
    this.listJogadores[i].adicionado = false;
    CriarTorneioPage.listaDeJogadoresIncluidos.splice(i, 1);
  }
}
