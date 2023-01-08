import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();


    constructor(){
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }

    Adiciona(): void{
        const negociacao = this.CriaNegociacao();
        this._negociacoes.Adiciona(negociacao)
        console.log(this._negociacoes.Listar())
        this.LimpaFormulario();
    }
    CriaNegociacao(): Negociacao{
        const exp = /-/;
        const data = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data,quantidade,valor);
    }

    LimpaFormulario(): void{
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}