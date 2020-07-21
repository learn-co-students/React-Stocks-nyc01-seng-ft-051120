import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sortBy: "Alphabetically",
    filter: ""
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stockData => {
        this.setState({stocks: stockData})
    })
  }

  componentDidMount() {
    this.fetchStocks()
  }

  buyStock = id => {
    let stock = this.state.stocks.find(stock => stock.id === id)
    this.setState(previousState => {
      return {
        portfolio: [...previousState.portfolio, stock]
      }
    })
  }

  sellStock = id => {
    let newPortfolio = this.state.portfolio.filter(stock => stock.id !== id)
    this.setState({portfolio: newPortfolio})
  }

  sortByChange = event => {
    this.setState({sortBy: event.target.value})
  }

  sortStocks = stocks => (
    this.state.sortBy === "Alphabetically" ?
    stocks.sort((a, b) => a.ticker.localeCompare(b.ticker) ) :
    stocks.sort((a, b) => a.price - b.price )
  )

  filterChange = event => {
    this.setState({filter: event.target.value})
  }

  filterStocks = stocks => (
    stocks.filter(stock => stock.type === this.state.filter)
  )

  render() {
    console.log(this.state)
    let displayStocks = this.sortStocks(this.state.stocks)
    displayStocks = this.filterStocks(displayStocks)
    let displayPortfolio = Array.from(new Set(this.sortStocks(this.state.portfolio)))
    return (
      <div>
        <SearchBar
          sortByChange={this.sortByChange}
          filterChange={this.filterChange}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={displayStocks}
                buyStock={this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={displayPortfolio}
                sellStock={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
