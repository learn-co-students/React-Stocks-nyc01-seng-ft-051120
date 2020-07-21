import React from 'react';

class SearchBar extends React.Component {
  
  state = {
    alphabetically: true,
    price: false
  }

  handleChange = event => {
    this.setState(prevState => {
      return {
        alphabetically: !prevState.alphabetically,
        price: prevState.alphabetically
      }
    })
    this.props.sortByChange(event)
  }

  render() {
    return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="alphabetically" value="Alphabetically" checked={this.state.alphabetically} onChange={(e) => this.handleChange(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="price" value="Price" checked={!this.state.alphabetically} onChange={(e) => this.handleChange(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => this.props.filterChange(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
  }
  
}


export default SearchBar;
