import { Component } from "react";


export class InputText extends Component {
  render() {
    const { name, maxLength, required, type, onChange } = this.props;
    return (
      <label>
        {`${name.toUpperCase()}: `}
      <input
        onChange={onChange || null}
        type={type} 
        name={name}
        maxLength={maxLength}
        required={required}
      />
      </label>
    )
  }
}