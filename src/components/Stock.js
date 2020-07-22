import React from 'react'

const Stock = (props) => (
  <div>

  <div onClick={() => props.clickHandler(props.stock.id)}>

    <div  className="card">
      <div id={props.stock.id} className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.ticker}: {props.stock.price
          }</p>
      </div>
    </div>


  </div>

   </div>
);

export default Stock
