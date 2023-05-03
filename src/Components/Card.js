import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { title, img, description, price, off } = this.props;
    return (
      <div className="card">
        <div className="card__body">
          <img className="card__img" src={img} alt={title} />
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <h2 className="card__price">${price}</h2>
          <button className="card__btn">VIEW PRODUCT</button>
          <span className="card__price-off">{off} - %</span>
        </div>
      </div>
    );
  }
}
