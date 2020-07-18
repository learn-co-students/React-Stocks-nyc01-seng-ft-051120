import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderFiltered = () => {
    let copyStocks = this.props.stocks.filter(stock => stock.type === this.props.filter)
    if (this.props.sorted === 'Alphabetically'){
      copyStocks = copyStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.props.sorted === 'Price'){
      copyStocks = copyStocks.sort((a,b) => a.price > b.price ? 1 : -1 )
    }
    return (
      copyStocks.map(stock => 
            <Stock {...stock} key={stock.id} buyStock={this.props.buyStock} />
            )
    )
    
  }

  renderUnfiltered = () => {
    let copyStocks = this.props.stocks
    if (this.props.sorted === 'Alphabetically'){
      copyStocks = copyStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.props.sorted === 'Price'){
      copyStocks = copyStocks.sort((a,b) => a.price > b.price ? 1 : -1 )
    }
    
    return (
      copyStocks.map(stock => 
      <Stock {...stock} key={stock.id} buyStock={this.props.buyStock} />
      )
    ) 
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.filter !== "All" ? this.renderFiltered() : this.renderUnfiltered()
        }
      </div>
    );
  }

}

export default StockContainer;
