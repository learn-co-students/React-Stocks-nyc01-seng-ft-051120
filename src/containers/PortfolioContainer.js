import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

// styleButton=()=>{
//   return{
//     // background:"black",
//     // cursor: 'crosshair'
//     null
//   }

// }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map(stock => 
          <div key={stock.id} className='card'>
            <div>{stock.name}</div>
            <div>{stock.ticker}: {stock.price}</div>
        <button onClick={() => this.props.removeStock(stock.id)}>🗑️</button>
          </div>
          )}
      </div> 
    )
  }
}

export default PortfolioContainer;
