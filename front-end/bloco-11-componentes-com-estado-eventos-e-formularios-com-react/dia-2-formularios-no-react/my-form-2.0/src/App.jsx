import { Component } from 'react';
import './App.css';
import { InputCity } from './InputCity';
import { InputStates } from './InputStates';
import { InputText } from './InputText';

export default class App extends Component {
  state = {
    text: '',
  }

  handleInputTextChange = (event) => {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>

            <InputText
              onChange={this.handleInputTextChange}
              type="text"
              name="nome"
              maxLength={40}
              required={true}
            />

            <InputText
              type="email"
              name="email"
              maxLength={50}
              required={true}
            />

            <InputText
              type="text"
              name="cpf"
              maxLength={11}
              required={true}
            />

            <InputText
              type="text"
              name="endereco"
              maxLength={200}
              required={true}
            />

            <InputCity
              type="text"
              name="cidade"
              maxLength={28}
              onBlur={null}
              required={true}
            />

            <InputStates
              name="estado"
              required={true}
            />

          </fieldset>
        </form>
      </div>
    );
  }
}
