import React from 'react'

class Stock extends React.Component {


  render(){
    return (

      <div>
        <div className="card" onClick={()=>this.props.buyStock(this.props.id)}>
          <div className="card-body">
            <h5 className="card-title">{
                this.props.name
              }</h5>
            <p className="card-text">{
                this.props.ticker
              }: {this.props.price}</p>
          </div>
        </div>
      </div>
    )}
};

export default Stock
