import React from "react";
const Reviews = ({reviews}) => {

    const renderReviews = reviews.map(review => {
        return <p>{review.content}</p>
    })
    return (
        <div>
            {renderReviews}
        </div>
    )
}

export default Reviews; 