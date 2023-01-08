import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    Adiciona() {
        const negociacao = this.CriaNegociacao();
        this._negociacoes.Adiciona(negociacao);
        console.log(this._negociacoes.Listar());
        this.LimpaFormulario();
    }
    CriaNegociacao() {
        const exp = /-/;
        const data = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    LimpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
