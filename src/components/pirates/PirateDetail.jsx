import React from 'react';
import Pirate from './Pirate';

const PirateDetail = (props) => {
    if (!props.pirate) return <p>"Loading..."</p>;

    const raids = props.pirate.raids.map((raid, index) => {
        return <li key={index}>
            {raid.location}
        </li>
    });

    function handleDelete () {
        props.onDelete(props.pirate.id)
    }

    return (
        <div className="component">
            <Pirate pirate={props.pirate}></Pirate>
            <p>Raids:</p>
            <ul>
                {raids}
            </ul>
            <button onClick={handleDelete}> Delete {props.pirate.firstName} {props.pirate.lastName} </button>
        </div>
    )

}

export default PirateDetail;
