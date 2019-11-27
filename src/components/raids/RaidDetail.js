import React  from 'react';
import Raid from "./Raid"

const RaidDetails = (props) => {
  if (!props.raid){
    return "Loading..."
  }

  const pirates = props.raid.pirates.map((pirate, index) => {
      return <li key={index}>
          {pirate.firstName} {pirate.lastName}
      </li>
  });

  const handleDelete = () => {
    props.onDelete(props.raid.id)
  }

  return (
    <div className = "component">
      <Raid raid = {props.raid}/>
      <p>Pirates:</p>
      <ul>
        {pirates}
      </ul>
      <button onClick={handleDelete}>Delete {props.raid.location}</button>
    </div>
  )
}

export default RaidDetails;
