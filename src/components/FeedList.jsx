import React from 'react';
import FeedItem from './FeedItem.jsx';

// Exercise 2: Set It Up
// write a functional component
// make it a div with class name FeedList
// import FeedItem and include it inside the div
// export the component!

const FeedList = (props) => {
	const {images} = props;
	return (
		<div className="FeedList">
			{
				images.map((image, index) =>
					<FeedItem key={index} image={image} />
				)
			}

		</div>
	)
};

export default FeedList;

// Exercise 3: Prop It Up
// FeedList should accept props as params
// Destructure photos from props
// Iterate over the data and map each photo data to a FeedItem

