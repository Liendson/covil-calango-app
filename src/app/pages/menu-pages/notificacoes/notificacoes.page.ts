import { Component } from '@angular/core';
import { GenericClass } from 'src/app/utils/generic.class';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage extends GenericClass {

  public listTodasNotificacoes: any[] = [
    {
      titulo: 'Torneio Regional já tem data!',
      descricao: 'O torneio regional já tem data marcada, entre na aba de torneios e faça sua inscrição!',
      dataHora: '01/01/2021 - 10:00',
    },
    {
      titulo: 'Essa semana não haverá torneios!',
      descricao: 'Devido ao feriado de dia das mães, essa semana não haverá torneios',
      dataHora: '02/02/2022 - 10:00',
    },
    {
      titulo: 'Regional é amanhã!',
      descricao: 'Se prepare, o regional já é amanhã!',
      dataHora: '03/03/2023 - 10:00',
    }
  ]

}
