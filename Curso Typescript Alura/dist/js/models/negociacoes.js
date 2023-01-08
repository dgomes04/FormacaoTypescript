export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    Adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    Listar() {
        return this.negociacoes;
    }
}
