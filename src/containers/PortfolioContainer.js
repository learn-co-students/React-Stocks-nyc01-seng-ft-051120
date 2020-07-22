import React, { Component } from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = props => {
  return (
    <div>
      <h2>My Portfolio</h2>
        {props.bought.map(stock => 
        <Stock key={stock.id} {...stock} stockAction={props.sellStock}/> )}
    </div>
  );
}
export default PortfolioContainer;
