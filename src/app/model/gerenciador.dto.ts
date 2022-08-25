import { LojaDTO } from "./loja.dto";

export class GerenciadorDTO {
  public id?: number;
  public lojaId?: number;
  public nome?: string;
  public tipoGerenciador?: string;
  public loja?: LojaDTO;
}