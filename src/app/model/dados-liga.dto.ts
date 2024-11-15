import { JogadorLigaDTO } from './jogador-liga.dto';
import { JogadorDTO } from './jogador.dto';

export class DadosLigaDTO {
  public id?: number;
  public nome?: string;
  public dtAtualizacao: Date;
  public campeao?: JogadorDTO;
  public listaDeParticipantes: JogadorLigaDTO[];
  public premiacao?: string;
}
