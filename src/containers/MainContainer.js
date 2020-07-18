import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state ={
    stocks: [],
    portfolio: [],
    sort: '',
    filter: ''
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r=>r.json())
    .then(stocks=>{
      this.setState({stocks})
    })
  }
  buyStock=(id)=>{
    this.setState({portfolio: [...this.state.portfolio, this.state.stocks.find(stock=> stock.id===id)]})
  }
  sellStock=(id)=>{
    this.setState({portfolio: [...this.state.portfolio.filter(stock=> stock.id!=id)]})
  }

  sortStock=(e)=>{
    this.setState({sort:  e.target.value})
  }

  sortStockByTicker=()=>{
    return this.filteredStock().sort((a, b) => a.ticker.localeCompare(b.ticker)) 
  }

  sortStockByPrice=()=>{
    return this.filteredStock().sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }
      else return -1
    })
  }

  sortedStock=()=>{
    if(this.state.sort.length>0){
      if(this.state.sort==='Alphabetically'){
        return this.sortStockByTicker()
      }
      else if(this.state.sort==='Price'){
        return this.sortStockByPrice()
      }
    }else return this.filteredStock()
  }


  
  filterStock=(e)=>{
    this.setState({filter: e.target.value})
  }

  filteredStock=()=>{
    switch(this.state.filter){
      case '': return this.state.stocks
      case 'Tech': return this.state.stocks.filter(stock=> stock.type==='Tech')
      case 'Sportswear': return this.state.stocks.filter(stock=> stock.type==='Sportswear')
      case 'Finance': return this.state.stocks.filter(stock=> stock.type==='Finance')
      default: return this.state.stocks
     
    }
  }
  

    

  render() {
    
    console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar filterStock={this.filterStock} sortStock={this.sortStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortedStock()} addPortfolio={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
