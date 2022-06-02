import { Component } from "react";


export class InputCity extends Component {
  render() {
    const { name, maxLength, required, type, onBlur } = this.props;
    return (
      <label>
        {`${name.toUpperCase()}: `}
      <input 
        type={type} 
        name={name}
        onBlur={onBlur}
        maxLength={maxLength}
        required={required}
      />
      </label>
    )
  }
}