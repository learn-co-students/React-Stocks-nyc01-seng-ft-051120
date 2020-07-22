import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    sortby: '',
    filter: 'All'
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      this.setState({
        stocks: data
      })
    })
  }

  clickHandler = (id) => {
    let addStock = this.state.stocks.find(stock => stock.id === id)
      this.setState({
        portfolioStocks:[...this.state.portfolioStocks, addStock]
      })

  }

  removeStock = (id) => {
    console.log('success')
    let filteredArray = this.state.portfolioStocks.filter(stock => stock.id !== id)
    this.setState({
      portfolioStocks: filteredArray
    })
  }

  updateFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  sortBy = (e) => {
   this.setState({sortBy: e.target.value})
  }



  render() {
    console.log(this.state.filter)
     let portfolioStocks = this.state.portfolioStocks
     let filteredStocks = [...this.state.stocks]

     if(this.state.filter === 'Tech'){
       filteredStocks = filteredStocks.filter(stock => stock.type === "Tech")
     }
     else if(this.state.filter === 'Finance'){
       filteredStocks = filteredStocks.filter(stock => stock.type === "Finance")
     }
     else if(this.state.filter === 'Sportswear'){
       filteredStocks = filteredStocks.filter(stock => stock.type === "Sportswear")
     }
     else if(this.state.filter === 'All'){
      filteredStocks
     }



    if(this.state.sortBy === 'Alphabetically'){
      filteredStocks.sort((a,b) => (a.name > b.name ? 1 : -1 ))
    }
    else if( this.state.sortBy === 'Price'){
      filteredStocks.sort((a,b) => (a.price > b.price ? 1 : -1 ))
    }



    return (
      <div>
        <SearchBar filter={this.props.filter} sort={this.state.sortBy} sortBy={this.sortBy} updateFilter={this.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler} stocks={filteredStocks}/>

            </div>
            <div className="col-4">

               <PortfolioContainer removeStock={this.removeStock} portfolioStocks={portfolioStocks} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
