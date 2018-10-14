import React from 'react'

export const Review = props => {
	const {review} = props
	return (
		<div>
			{/* <Rating icon="star" rating={review.rating} maxRating={5}/> */}
			<p>{review.content}</p>
		</div>
	)
}
