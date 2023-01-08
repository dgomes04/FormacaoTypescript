import { NegociacaoController } from "./controllers/negociacao.controller.js";
const negociacaoController = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.Adiciona();
    });
}
else {
    throw Error('Não foi possível inciar a aplicação. Verifique se o form existe.');
}
