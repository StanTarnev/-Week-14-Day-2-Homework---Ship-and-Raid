import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import PirateList from '../components/pirates/PirateList';
import ShipList from '../components/ships/ShipList';
import RaidList from '../components/raids/RaidList';
import PirateContainer from './pirates/PirateContainer';
import ShipContainer from './ships/ShipContainer';
import RaidContainer from './raids/RaidContainer';
import Request from '../helpers/request';

class MainContainer extends Component {


  render(){
    return (
      <div>
      <Router>
      <React.Fragment>
      <NavBar/>
      <Switch>
      {/* GET ALL PIRATES */}
      <Route path="/pirates" component={PirateContainer}/>
      <Route path="/ships" component={ShipContainer}/>
      <Route path="/raids" component={RaidContainer}/>

      </Switch>


      </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default MainContainer;
