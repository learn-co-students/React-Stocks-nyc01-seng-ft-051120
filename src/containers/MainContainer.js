import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks:[],
    type: "",
    sortBy: "",
    bought: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks}))
  }

  onTypeChange = e => {
    this.setState({type: e.target.value})
  }

  showStocks = () => {
    let filtered = [...this.state.stocks]
    if(this.state.type !==""){
      filtered = filtered.filter(stock => stock.type === this.state.type) 
    } else {filtered = filtered}
    return filtered
  }

  handleSort = (e) => {
    this.setState({sortBy: e.target.value})
  }

  handleBuy=(stockId)=>{
    let selectedStock = this.state.stocks.find(stock => stock.id === stockId)
    this.setState(prevState => ({bought:[...prevState.bought, selectedStock]}))
  }

  sellStock = (stockId) => {
    this.setState({
      bought: this.state.bought.filter(stock => stock.id !== stockId) 
    })
  }

  render() {
    let displayStocks = this.showStocks()

    if(this.state.sortBy === 'Alphabetically'){
      displayStocks.sort((a, b)=> a.name.localeCompare(b.name))
    }else if (this.state.sortBy === 'Price'){
      displayStocks.sort((stockA, stockB)=>stockA.price > stockB.price ? 1 : -1) }

    return (
      <div>
        <SearchBar onTypeChange={this.onTypeChange} sortBy = {this.state.sortBy} 
            handleSort = {this.handleSort}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={displayStocks} handleBuy={this.handleBuy}/>
            </div>
            <div className="col-4">
              <PortfolioContainer bought={this.state.bought} sellStock={this.sellStock}/>
            </div>
          </div>
      </div>
  )}
}
export default MainContainer;
