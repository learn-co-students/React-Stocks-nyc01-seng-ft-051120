import React from 'react'

const Stock = (props) => {
  const {addPortfolio, sell, removePortfolio, name,  id, price}=props
  return (
  <div>

    <div className="card" onClick={sell?()=>removePortfolio(id):()=>addPortfolio(id)} >
      <div className="card-body">
        <h5 className="card-title">
          {
            name
          }</h5>
        <p className="card-text">{
            price
          }</p>
      </div>
    </div>


  </div>
);
}



export default Stock
