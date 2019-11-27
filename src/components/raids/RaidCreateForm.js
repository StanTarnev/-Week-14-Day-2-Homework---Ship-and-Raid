import React, {Component} from 'react';
import Request from '../../helpers/request';

class RaidCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: "",
      loot: 0
    }
    this.handleLocation = this.handleLocation.bind(this);
    this.handleLoot = this.handleLoot.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLocation(event) {
    this.setState({
      location: event.target.value
    })
  }

  handleLoot(event) {
    this.setState({
      loot: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const newRaid = {
      location: this.state.location,
      loot: this.state.loot,
    }
    this.props.onFormSubmit(newRaid);
  }

  render(){

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Location..." name="location" onFormSubmit={this.handleLocation} value={this.state.location}/>

          <button type="submit">Save</button>
          </form>
      </div>
    );
  }
}

export default RaidCreateForm;
