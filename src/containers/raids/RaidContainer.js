import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RaidList from '../../components/raids/RaidList.js';
import RaidDetail from '../../components/raids/RaidDetail.js';
import RaidCreateForm from '../../components/raids/RaidCreateForm.js'
import Request from '../../helpers/request.js';

class RaidContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raids: []
    }
    this.findRaidById = this.findRaidById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);

  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/raids')
    .then((data) => {
      this.setState({raids: data._embedded.raids});
    })
  }

  findRaidById(id){
    const raid = this.state.raids.find((raid) => {
      return raid.id === parseInt(id);
    });
    return raid;
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/raids/' + id;
    request.delete(url)
    .then(() => {
    window.location = '/raids';
    });
  }

  handlePost(raid){
    const request = new Request();
    request.post('/api/raids', raid).then(() => {
      window.location = '/raids'
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path = '/raids/new' render={(props) =>{
      return <RaidCreateForm onFormSubmit={this.handlePost}/>
      }}/>

      <Route exact path="/raids/:id" render={(props) => {
        const id = props.match.params.id;
        const raid = this.findRaidById(id);
        return <RaidDetail raid={raid} onDelete={this.handleDelete}/>
      }} />

      <Route render={(props) => {
        return <RaidList raids={this.state.raids} />
      }} />
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default RaidContainer;
