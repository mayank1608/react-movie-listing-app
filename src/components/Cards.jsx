import React from 'react';
import Movies from '../data/data';

const Cards = (props) => {
	const ctags = props.tags;
	return(
		<div className="col-md-4 mb-4">
			<div className="card">
			  <img className="card-img-top" src={props.imgsrc} alt={props.name} />
			  <div className="card-body">
			    <h5 className="card-title">{props.name}</h5>
			    {/* <span className="badge badge-primary">{props.tags}</span> */}
			    {/* {Movies.map(getMovieTags)}*/}
			    <div>
			    {ctags.map((value, index) => {
			        return <span className="badge badge-primary mr-1" key={index}>{value}</span> 
			    })}
			    </div>
				{/* <Tags tags={props.tags} />*/}
			    <p className="card-text">{props.desc}</p>
		    	<a href={props.link} className="btn btn-sm btn-primary" target="_blank">Read More</a>
			  </div>
			</div> 
		</div>
	)
}

export default Cards