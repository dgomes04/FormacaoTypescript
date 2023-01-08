export class Negociacao{
   

    constructor(
        private _data:Date,
        private readonly quantidade:number,
        private readonly valor:number
        ){}

  
    get Volume(): number{
        return this.quantidade * this.valor;
    }
    get data(){
        const data = new Date(this._data.getTime());
        return data;
    }
}