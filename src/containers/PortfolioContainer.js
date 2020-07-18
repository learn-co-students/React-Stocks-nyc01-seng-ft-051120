import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log(this.props.boughtStocks)
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.boughtStocks.map((stock, index) =>
          <Stock
          key={index}
          stock={stock}
          trackStock={this.props.trackStock}
          />

        )}
      </div>
    );
  }

}

export default PortfolioContainer;
