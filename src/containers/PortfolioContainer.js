import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return (
      this.props.portfolio.map(stock => 
        <div className="card" >
  <div className="card-body" onClick={() => this.props.sellStock(stock.id)}>
    <h5 className="card-title">{
        stock.name
      }</h5>
    <p className="card-text">{
        stock.price
      }</p>
  </div>
</div>
        )

    ) 
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderPortfolio()
        }
      </div>
    );
  }
}


export default PortfolioContainer;
