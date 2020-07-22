import React from 'react'

const PortfolioStock = (props) => (
  <div>
   {props.portfolioStocks.map(stock => 
    <div className="card">
      <div  onClick={() => props.removeStock(stock.id)} className="card-body">
        <h5 id={stock.id} className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
           stock.ticker} {stock.price
          }</p>
      </div>
    </div>

  )}
  </div>
);

export default PortfolioStock
