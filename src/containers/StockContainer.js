import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  state = {
    // boughtStocks: []
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map((stock, index) =>
          <Stock key={index} stock={stock} trackStock={this.props.trackStock}/>

        )}
      </div>
    );
  }

}

export default StockContainer;
