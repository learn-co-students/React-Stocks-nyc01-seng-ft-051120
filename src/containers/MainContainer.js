import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    inPortfolio: [],
    filterBy: "All",
    sortBy: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(stocks => 
     {this.setState({stocks})} 
    )
  }

  buyStock = (id) => {
    // if (!this.state.inPortfolio.find(stockId => stockId === id)){
      this.setState({
        inPortfolio: [...this.state.inPortfolio, id]
      }, ()=>console.log(this.state.inPortfolio))
    // }
  }

  sellStock = (id) => {
    this.setState({
      inPortfolio: this.state.inPortfolio.filter(stockId => stockId !== id) 
    }, ()=>console.log(this.state.inPortfolio))
  }

  changeFilter = type => {
    this.setState({filterBy: type})
  }

  updateSort = attribute => {
    this.setState({ sortBy: attribute })
  }

  stocksToDisplay = () => {
    // let typeStocks = [...this.state.stocks]
    // if (this.state.filterBy !== "All"){
    //   typeStocks = typeStocks.filter(stock=> stock.type === this.state.filterBy)
    // } 
    // return typeStocks

    let typeStocks = [...this.state.stocks]
    if(this.state.filterBy !== "All"){
      typeStocks =  typeStocks.filter(stock => stock.type === this.state.filterBy)        
    } 

    if (this.state.sortBy === "Alphabetically"){
      return typeStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.state.sortBy === "Price") {
      return typeStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    } else {
      return typeStocks
    }

    // switch(this.state.sortBy){
    //   case "Alphabetically":
    //     return typeStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    //   case "Price":
    //       return typeStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    //   default:
    //     return typeStocks
    // }
  }

  render() {

    // let displayStocks = this.stocksToDisplay()
    // let portfolioStocks = this.state.inPortfolio.map(id => this.state.stocks.find(stock => stock.id === id))
    let portfolioStocks = this.state.stocks.filter(stock => (this.state.inPortfolio.includes(stock.id)))
    return (
      <div>
        <SearchBar filter = {this.state.filterBy} changeFilter = {this.changeFilter}  sort={this.state.sortBy} updateSort={this.updateSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.stocksToDisplay()} buy={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolioStocks} sell={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
