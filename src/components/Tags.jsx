import React from 'react';

const Tags = (props) => {
	return(
		<span>
		    <span className="badge badge-primary">{props.tags}</span> 
	    </span>
	)
}

export default Tags