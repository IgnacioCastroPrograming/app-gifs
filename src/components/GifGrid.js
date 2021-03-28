import React, { useState, useEffect, Fragment } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const  GifGrid = ({category}) => {

	const [images, setImages] = useState([]);

	useEffect( () => {
		getGifs( category )
		.then( setImages );
	} ,[])

	

	// getGifs();

	return (
		<Fragment>
			<h3>{category}</h3>
			<div className="card-grid">
				{ 
					images.map( img => (
						<GifGridItem 
							key={img.id}
							{ ...img  }
						/>
					) ) 
				}
			</div>
		</Fragment>
	)
}