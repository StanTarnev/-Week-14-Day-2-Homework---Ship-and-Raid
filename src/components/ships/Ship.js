import React  from 'react';
import {Link} from 'react-router-dom';

const Ship = (props) => {

	if (!props.ship) {
		return "Loading...";
	}

	const url = "/ships/" + props.ship.id;

	return (
		<div className="component">
			<Link to={url}>{props.ship.name}</Link>
			<p className="name">
				{props.ship.name}
			</p>
		</div>
	)
}

export default Ship;
