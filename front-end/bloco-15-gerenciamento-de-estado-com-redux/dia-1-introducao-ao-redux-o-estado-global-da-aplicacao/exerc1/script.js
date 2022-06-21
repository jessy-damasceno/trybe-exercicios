function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const INITIAL_STATE = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }

    case 'ADD_COLOR':
      return {
        ...state,
        colors: [...state.colors, action.newColor],
        index: state.colors.length,
      }

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

document.getElementById('previous')
  .addEventListener('click', () => {
    store.dispatch({ type: 'PREVIOUS_COLOR' });
  });

document.getElementById('next')
  .addEventListener('click', () => {
    store.dispatch({ type: 'NEXT_COLOR' });
  });

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors);
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});

const randomButton = document.createElement('button');
randomButton.innerText = 'Random Button';
randomButton.addEventListener('click', () => {
  store.dispatch({ type: 'ADD_COLOR', newColor: criarCor() });
});

document.getElementById('container').appendChild(randomButton);
