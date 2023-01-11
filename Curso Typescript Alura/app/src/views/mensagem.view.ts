import { View } from "./view.js";


export class MensagemView extends View<string>{
   
    
    protected template(model:string):string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
    public update(model:string):void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}