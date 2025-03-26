import { ComandaDTO } from './comanda.dto';
import { UsuarioDTO } from './usuario.dto';

export class JogadorDTO extends UsuarioDTO {
  public pontos?: number;
  public creditos?: number;
  public tcgId?: string;
  public comanda?: ComandaDTO;

  constructor(pontos: number, creditos: number, tcgId: string, usuario: UsuarioDTO, comanda?: ComandaDTO) {
    super(usuario?.id, usuario?.nome, usuario?.contato, usuario.token);
    this.pontos = pontos;
    this.creditos = creditos;
    this.tcgId = tcgId;
    this.comanda = comanda;
  }
}
