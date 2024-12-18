import { UsuarioDTO } from './usuario.dto';

export class JogadorDTO extends UsuarioDTO {
  public pontos?: number;
  public creditos?: number;
  public tcgId?: string;

  constructor(id: number, nome: string, pontos: number, creditos: number, tcgId: string, contato: number) {
    super(id, nome, contato);
    this.id = id;
    this.nome = nome;
    this.pontos = pontos;
    this.creditos = creditos;
    this.tcgId = tcgId;
  }
}
