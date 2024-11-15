export class JogadorDTO {
  public id?: number;
  public nome?: string;
  public pontos?: number;
  public creditos?: number;
  public tcgId?: string;
  public tipoJogo?: number;

  constructor(id: number, nome: string, pontos: number, creditos: number, tcgId: string) {
    this.id = id;
    this.nome = nome;
    this.pontos = pontos;
    this.creditos = creditos;
    this.tcgId = tcgId;
  }
}
