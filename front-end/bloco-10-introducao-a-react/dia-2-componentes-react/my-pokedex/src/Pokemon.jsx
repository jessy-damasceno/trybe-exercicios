import { Component } from "react"

export class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: peso, image } = this.props.pokemon;
    return (
      <section className="Pokemon">
        <div>

          <h2>{name}</h2>
          <span>{type}</span>
          <span>{peso.value} {peso.measurementUnit}</span>

        </div>

        <img className="img__pokemon" src={image} alt="Imagem de um pokémon" />

      </section>
    )
  }
}