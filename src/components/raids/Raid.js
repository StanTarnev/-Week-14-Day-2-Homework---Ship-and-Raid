import React  from 'react';
import {Link} from 'react-router-dom';

const Raid = (props) => {

  const url = "/raids/" + props.raid.id;


  return (
    <div className="component">
      <Link to = {url}>
        {props.raid.location}
      </Link>
      <p>Loot: {props.raid.loot}</p>
    </div>
  )
}

export default Raid;
