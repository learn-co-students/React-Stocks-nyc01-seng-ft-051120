import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state ={
    stocks :[],
    stocksInPortFolio:[],
    filterBy:"",
    sortBy:""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(stocks=>this.setState({stocks}))
  }

  buyStock = (id) =>{
    if(!this.state.stocksInPortFolio.some((stock)=>stock.id === id)){
      const stock = this.state.stocks.find(stock=>stock.id === id)
      this.setState({stocksInPortFolio: [...this.state.stocksInPortFolio,stock]})
    }
  }

  sellStock = (id) =>{
    const currentStocksInPorfolio = this.state.stocksInPortFolio.filter( stock => stock.id !== id)
    this.setState({stocksInPortFolio:currentStocksInPorfolio})
  }

  filterBy = (e)=>{
    this.setState({filterBy:e.target.value})
    console.log(e.target.value)
  }

  sortBy = (e)=>{
    this.setState({sortBy:e.target.value})
    console.log(e.target.value)
  }


  render() {
    console.log(this.state);
    let stocksToBeDisplay = [...this.state.stocks]
    
    if(this.state.filterBy === "Tech"){
      stocksToBeDisplay = stocksToBeDisplay.filter(stock => stock.type == "Tech")
    }else if(this.state.filterBy === "Sportswear"){
      stocksToBeDisplay = stocksToBeDisplay.filter(stock => stock.type == "Sportswear")
    }else if(this.state.filterBy === "Finance"){
      stocksToBeDisplay = stocksToBeDisplay.filter(stock => stock.type == "Finance")
    }

    if (this.state.sortBy ==="Alphabetically"){
      stocksToBeDisplay.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }else if(this.state.sortBy ==="Price"){
      stocksToBeDisplay.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }
    
    
    return (
      <div>
        <SearchBar sortBy={this.sortBy} filterBy={this.filterBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks = {stocksToBeDisplay} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocksInPortFolio ={this.state.stocksInPortFolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
