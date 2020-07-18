import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  componentDidMount(){ //When the Dom Loads 
    fetch('http://localhost:3000/stocks') //fetch stocks
    .then(r => r.json()) 
    .then(stocks => {
      this.setState({ // change the state 
        stocks: stocks //equal to our fetch 
      })
    })
  }
  
  state = {
    stocks: [],
    myStocks: [],
    filter: 'All',
    sort: 'None'
  }

  buyStock = (id) => {
    if (!this.state.myStocks.find(pId => pId === id)){
      this.setState({
        myStocks: [...this.state.myStocks, id]
      })
      console.log(this.state);
    }
    }

    removeStock = (id) => {
      let newStocks = this.state.myStocks.filter(pId => pId !== id)
        this.setState({
          myStocks: newStocks
        })
      console.log(this.state)
    }

    updateSort = sortBy => {
      this.setState({ sort: sortBy })
    }

    updateFilter = type  => {
      this.setState({ filter: type })
    }


   calculateDisplayStocks = () => {
    let filteredStocks = [...this.state.stocks]
    if (this.state.filter !== 'All') {
        filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter)
    }

    if (this.state.sort === 'Alphabetically'){
      return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.state.sort === 'Price'){
      return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1 )
    } else {
      return filteredStocks
    }
   }
   
  render() {
    let myPortfolio = this.state.myStocks.map(id => this.state.stocks.find(stock => stock.id === id))
    let displayStocks = this.calculateDisplayStocks()
    return (
      <div>
        <SearchBar filter={this.state.filter} sort={this.state.sort} updateFilter={this.updateFilter} updateSort={this.updateSort}/>
          <div className="row">
            <div className="col-8">
              <StockContainer 
                buyStock={this.buyStock}
                stocks={displayStocks}
              />
            </div>
            <div className="col-4">
              <PortfolioContainer 
                stocks={myPortfolio}
                removeStock={this.removeStock}
              />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
