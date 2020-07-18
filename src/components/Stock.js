import React from 'react'

class Stock extends React.Component {
   render() {
   const { stock, trackStock} = this.props
   return(
  <div>
    <div className="card">
      <div className="card-body">
        <h5 onClick={trackStock}className="card-title" id={stock.id}>{
            stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
          }</p>
      </div>
    </div>


    </div>
  );
 }
}

export default Stock
