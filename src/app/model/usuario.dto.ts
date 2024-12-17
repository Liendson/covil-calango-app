export class Usuario {
  public id?: number;
  public nome?: string;
  public contato?: number;

  constructor(id: number, nome: string, contato: number) {
    this.id = id;
    this.nome = nome;
    this.contato = contato;
  }
}
