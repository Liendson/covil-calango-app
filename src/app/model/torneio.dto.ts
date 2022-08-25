import { RodadaDTO } from "./rodada.dto";

export class TorneioDTO {
  public id?: number;
  public lojaId?: number;
  public nomeTorneio?: string;
  public tipoJogo?: number;
  public tierTorneio?: number;
  public valorInscricao?: number;
  public dataInicio?: any;
  public dataFim?: any;
  public rodadas?: RodadaDTO[];
}