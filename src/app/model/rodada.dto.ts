import { PartidaDTO } from "./partida.dto"

export class RodadaDTO {
  public id?: number;
  public torneioId?: number;
  public numeroRodada?: number;
  public partidas?: PartidaDTO[];
}