import React, { Component } from 'react';
import PortfolioStock from '../components/PortfolioStock'

class PortfolioContainer extends Component {
    render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
          <PortfolioStock removeStock={this.props.removeStock} portfolioStocks={this.props.portfolioStocks} />
          }
      </div>
    );
  }

}

export default PortfolioContainer;
