import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: "All",
    sorted: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => 
      this.setState({stocks: data}))
  }

  buyStock = (id) => {
    // let copyPortfolio = this.state.portfolio
    this.state.stocks.map(stock => {
      if (stock.id === id && !this.state.portfolio.includes(stock)) {
        this.setState({portfolio: [...this.state.portfolio, stock]})
      }
    })
  }

  sellStock = (id) => {
    let copyPortfolio = this.state.portfolio.filter(stock => stock.id !== id)
    
    this.setState({portfolio: copyPortfolio})
  }

  

  filterStocks = (e) => {
    this.setState({filter: e.target.value})
  }

  sortStocks = (e) => {
    this.setState({sorted: e.target.value})
  }


  render() {
    return (
      <div>
        <SearchBar filter={this.state.filterValue} filterStocks={this.filterStocks} sortStock={this.sortStocks} sorted={this.state.sorted} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} buyStock={this.buyStock} filter={this.state.filter} sorted={this.state.sorted}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
