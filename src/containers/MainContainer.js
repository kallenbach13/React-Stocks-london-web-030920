import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/stocks/")
      .then(res => res.json())
      .then(stocks => this.setState({ stocks }));
  };

  buyStock = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(pstock => pstock.id !== stock.id)
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
