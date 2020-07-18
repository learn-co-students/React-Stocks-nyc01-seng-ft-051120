import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sorted === "Alphabetically" ? true : null} onChange={props.sortStock}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sorted === "Price" ? true : null} onChange={props.sortStock}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterStocks} >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
