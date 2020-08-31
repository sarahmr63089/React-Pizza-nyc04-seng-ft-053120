import React from "react"

class PizzaForm extends React.Component {

  handleTopping = (event) => {
    let newPizza = {...this.props.selectedPizza}
    newPizza.topping = event.target.value
    this.props.change(newPizza)
  }

  handleSize = (event) => {
    let newPizza = {...this.props.selectedPizza}
    newPizza.size = event.target.value
    this.props.change(newPizza)
  }

  handleRadio = (event) => {
    let newPizza = {...this.props.selectedPizza}
    if (event.target.value === "Vegetarian") {
      newPizza.vegetarian = true
    } else {
      newPizza.vegetarian = false
    }
    this.props.change(newPizza)
  }

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input onChange={(event) => {this.handleTopping(event)}} type="text" className="form-control" placeholder="Pizza Topping" value={
                  this.props.selectedPizza.topping || ""
                }/>
          </div>
          <div className="col">
            <select onChange={(event) => {this.handleSize(event)}} value={this.props.selectedPizza.size || "Small"} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input onChange={(event) => {this.handleRadio(event)}} className="form-check-input" type="radio" value="Vegetarian" checked={this.props.selectedPizza.vegetarian || false}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input onChange={(event) => {this.handleRadio(event)}} className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.props.selectedPizza.vegetarian || false}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={()=> {this.props.submit()}}>Submit</button>
          </div>
        </div>
      )
  }
}

export default PizzaForm
