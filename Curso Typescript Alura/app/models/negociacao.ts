export class Negociacao{
   

    constructor(
        private _data:Date,
        public readonly quantidade:number,
        public readonly valor:number
        ){}

  
    public get Volume(): number{
        return this.quantidade * this.valor;
    }
    public get data(){
        const data = new Date(this._data.getTime());
        return data;
    }
    public static CriaNegociacao(dataString: string, quantidadeString: string, valorString:string): Negociacao {
        const exp = /-/;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}