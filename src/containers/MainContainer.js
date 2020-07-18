import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const boughtStockList = []
class MainContainer extends Component {

  state = {
    stocks: [],
    sort: "",
    boughtStocks: []
  }

  componentDidMount(){
     this.fetchStocks()
  }

  sort = e => {
    if(e.target.value === "Alphabetically"){
    e.target.parentNode.parentNode.childNodes[2].childNodes[0].checked = false
    e.target.parentNode.parentNode.childNodes[3].childNodes[0].checked = false

     this.setState({
      sort: "Alphabetically",
      stocks: this.state.stocks.sort((a, b) => a.name.localeCompare(b.name) )
          })

  } else if(e.target.value === "Price") {

    e.target.parentNode.parentNode.childNodes[1].childNodes[0].checked = false
            e.target.parentNode.parentNode.childNodes[3].childNodes[0].checked = false
    this.setState({
      sort: "Price",
      stocks: this.state.stocks.sort((a, b) => b.price > a.price ? 1 : -1)
    })

  } else if(e.target.value === "Type") {

    e.target.parentNode.parentNode.childNodes[1].childNodes[0].checked = false
            e.target.parentNode.parentNode.childNodes[2].childNodes[0].checked = false
    this.setState({
      sort: "Price",
      stocks: this.state.stocks.sort((a, b) => b.type > a.type ? 1 : -1)
    })
    console.log(this.state)
  }

}

  trackStock = e => {
    const stock = this.state.stocks.find(s => s.id == e.target.id)
     boughtStockList.includes(stock) ? boughtStockList.pop(stock) : boughtStockList.push(stock)
     this.setState({boughtStocks: boughtStockList})
          console.log(this.state.boughtStocks)
  }

 fetchStocks(){
    fetch("http://127.0.0.1:3000/stocks")
    .then(res => res.json())
    .then(data => {

     this.setState({stocks: data})

    })
   }

  render() {

    return (
      this.state.boughtStocks.length > 0 ?
      <div>
        <SearchBar sort={this.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} trackStock={this.trackStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} trackStock={this.trackStock}/>

            </div>
          </div>
      </div>
      :
      <div>
        <SearchBar sort={this.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} trackStock={this.trackStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.stocks} boughtStocks={this.state.boughtStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
