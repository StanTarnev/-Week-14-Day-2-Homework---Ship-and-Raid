import React, {Component} from 'react';
import Request from '../../helpers/request';

class ShipCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pirates: []
    }
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/pirates')
    .then((data) => {
      this.setState({
        ships: data._embedded.pirates
      })
    }).then(console.log(this.state.pirates));
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const newShip = {
      name: this.state.name,
    }
    this.props.onFormSubmit(newShip);
  }

  render(){

    if (!this.state.pirates.length === 0) return(<p>Loading...</p>);


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name..." name="name" onChange={this.handleName} value={this.state.name}/>



          <button type="submit">Save</button>
          </form>
      </div>
    );
  }
}

export default ShipCreateForm;
