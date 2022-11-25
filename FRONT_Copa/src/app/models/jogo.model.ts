import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoA?: Selecao;
  selecaoB?: Selecao;
  criadoEm?: string;
  placar?: number;
  placar2?: number;
}
