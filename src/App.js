import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then((pizzaObjArr) => {
      this.setState({
        pizzas: pizzaObjArr
      })
    })
  }

  getSelectedPizza = (pizza) => {
    this.setState({
      selectedPizza: pizza
    })
  }

  getPizzaChange = (pizza) => {
    this.setState({
      selectedPizza: pizza
    })
  }

  changePizzaInDB = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify(this.state.selectedPizza)
    })
    .then(res => res.json())
    .then((pizzaObj) => {
      let newPizzaList = this.state.pizzas.map(pizza => {
        if (pizza.id === pizzaObj.id) {
          return pizzaObj
        }
        return pizza
      })

      this.setState({
        pizzas: newPizzaList
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm change={this.getPizzaChange} selectedPizza={this.state.selectedPizza} submit={this.changePizzaInDB} />
        <PizzaList pizzas={this.state.pizzas} getSelectedPizza={this.getSelectedPizza}/>
      </Fragment>
    );
  }
}

export default App;
