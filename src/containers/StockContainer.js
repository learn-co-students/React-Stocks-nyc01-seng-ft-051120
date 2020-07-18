import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => 
          <Stock 
          buyStock={this.props.buyStock}
          key={stock.id} 
          id={stock.id}
          name={stock.name} 
          ticker={stock.ticker} 
          price={stock.price}
          />
          )}
      </div>
    );
  }
}

export default StockContainer;
