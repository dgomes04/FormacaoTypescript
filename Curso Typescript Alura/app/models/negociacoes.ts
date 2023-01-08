import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    Adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    Listar(): readonly Negociacao[]{
        return this.negociacoes;
    }
}