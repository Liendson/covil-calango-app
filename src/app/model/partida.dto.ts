import { JogadorDTO } from "./jogador.dto";

export class PartidaDTO {
  public id?: number;
  public rodadaId?: number;
  public mesa?: number;
  public vencedor?: JogadorDTO;
  public perdedor?: JogadorDTO;
}