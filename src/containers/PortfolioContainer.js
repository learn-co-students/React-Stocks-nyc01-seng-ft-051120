import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio=()=>{
    return  this.props.portfolio.map(stock=><Stock {...stock} key={stock.id} removePortfolio={this.props.sellStock} sell={true}/>)
    }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
