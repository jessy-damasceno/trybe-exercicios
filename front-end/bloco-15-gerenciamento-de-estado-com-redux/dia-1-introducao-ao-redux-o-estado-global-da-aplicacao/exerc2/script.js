// const { combineReducers, createStore } = require("redux");

const ESTADO_INICIAL_1 = {
	nome: "Rodrigo",
	sobrenome: "Santos da Silva",
	endereco: "Rua Soldado Mathias, 765",
	cidade: "Belo Horizonte",
};

const ESTADO_INICIAL_2 = {
	nome: "Bruna",
	sobrenome: "Santana Oliveira",
	endereco: "Rua Holanda, 332",
	cidade: "São Paulo",
};

const setPerson1 = (firstName, lastName) => ({
  type: 'PERSON_1',
  nome: firstName,
  sobrenome: lastName,
});

const setPerson2 = (firstName, lastName) => ({
  type: 'PERSON_2',
  nome: firstName,
  sobrenome: lastName,
});

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
	switch (action.type) {
    case 'PERSON_1':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
		default:
			return state;
	}
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
	switch (action.type) {
    case 'PERSON_2':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
		default:
			return state;
	}
};

const reducerCombinado = Redux.combineReducers({
	meuPrimeiroReducer,
	meuSegundoReducer,
});

const store = Redux.createStore(reducerCombinado);

const setPersonInformations = () => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;
  document.getElementById('nome-2').innerHTML = meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.sobrenome;
};

const button = document.createElement('button');
button.innerText = 'butão';
button.addEventListener('click', () => store.dispatch(setPerson1('Tinoco', 'Motoqueiro')));
document.getElementById('container-1').appendChild(button);

window.onload = () => {
  setTimeout(() => {
    store.dispatch(setPerson1('Juninho', 'Vasconcelos'));
    store.dispatch(setPerson2('Alfredo', 'Mendes'));
  }, 2000);
};

store.subscribe(() => setPersonInformations());