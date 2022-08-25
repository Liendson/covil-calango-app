import { GerenciadorDTO } from "./gerenciador.dto";
import { LocalDTO } from "./local.dto";

export class LojaDTO {
  public id?: number;
  public localId?: number;
  public nome?: string;
  public isOts?: boolean;
  public local?: LocalDTO;
  public gerenciadores?: GerenciadorDTO[];
}